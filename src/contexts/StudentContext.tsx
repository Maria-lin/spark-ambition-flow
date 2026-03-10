import React, { createContext, useContext, ReactNode } from "react";

export interface StudentProfile {
  id: string;
  firstName: string;
  lastName: string;
  location: string;
  studies: string;
  level: string;
  avatar: string;
}

interface StudentContextType {
  profile: StudentProfile;
}

const defaultProfile: StudentProfile = {
  id: "stu-001",
  firstName: "Abdessamad",
  lastName: "K.",
  location: "Guyane",
  studies: "Informatique",
  level: "Licence",
  avatar: "AK",
};

const StudentContext = createContext<StudentContextType>({ profile: defaultProfile });

export const useStudent = () => useContext(StudentContext);

export const StudentProvider = ({ children }: { children: ReactNode }) => (
  <StudentContext.Provider value={{ profile: defaultProfile }}>
    {children}
  </StudentContext.Provider>
);
