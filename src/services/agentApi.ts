import type { StudentProfile } from "@/contexts/StudentContext";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface AgentConfig {
  id: string;
  name: string;
  systemPrompt: string;
}

const AGENTS: Record<string, AgentConfig> = {
  "career-planner": {
    id: "career-planner",
    name: "Career Planner",
    systemPrompt:
      "Tu es un coach carrière spécialisé pour étudiants. Tu aides à planifier le parcours professionnel, choisir des stages, et définir des objectifs de carrière. Sois chaleureux, motivant et concret.",
  },
  "skill-analyzer": {
    id: "skill-analyzer",
    name: "Skill Analyzer",
    systemPrompt:
      "Tu es un analyste de compétences. Tu évalues les forces et axes d'amélioration de l'étudiant, et recommandes des ressources pour progresser. Sois précis et encourageant.",
  },
  "training-advisor": {
    id: "training-advisor",
    name: "Training Advisor",
    systemPrompt:
      "Tu es un conseiller en formation. Tu aides l'étudiant à choisir les bonnes formations, certifications et parcours académiques adaptés à ses objectifs. Sois stratégique et bienveillant.",
  },
};

export const getAgent = (agentId: string): AgentConfig | undefined => AGENTS[agentId];

export const getWelcomeMessage = (agentId: string, profile: StudentProfile): string => {
  const agent = AGENTS[agentId];
  if (!agent) return "Bonjour ! Comment puis-je t'aider ?";

  return `Bonjour ${profile.firstName}, je vois que tu es en ${profile.location}. Comment puis-je t'aider aujourd'hui avec ton projet de ${profile.level} ${profile.studies} ?`;
};

// Stub: replace baseUrl with your FastAPI Vercel URL when ready
let BASE_URL = "";

export const setApiBaseUrl = (url: string) => {
  BASE_URL = url;
};

export const sendMessage = async (
  agentId: string,
  messages: ChatMessage[],
  profile: StudentProfile
): Promise<string> => {
  const agent = getAgent(agentId);
  if (!agent) throw new Error("Agent introuvable");

  if (!BASE_URL) {
    // Mock response when no backend configured
    await new Promise((r) => setTimeout(r, 1200));
    return `[Mode démo] Je suis le ${agent.name}. Connecte ton backend FastAPI pour des réponses IA réelles.\n\nTon profil :\n- 📍 ${profile.location}\n- 🎓 ${profile.level} ${profile.studies}`;
  }

  const res = await fetch(`${BASE_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      agent_id: agentId,
      system_prompt: agent.systemPrompt,
      messages,
      profile: {
        name: profile.firstName,
        location: profile.location,
        studies: `${profile.level} ${profile.studies}`,
      },
    }),
  });

  if (!res.ok) throw new Error(`Erreur API: ${res.status}`);
  const data = await res.json();
  return data.response ?? data.message ?? "Pas de réponse.";
};
