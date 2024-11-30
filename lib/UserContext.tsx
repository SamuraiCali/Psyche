import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  username: string;
  isAuthenticated: boolean;
  testScores: {
    leadership?: number;
    neurodivergence?: number;
    workplacePersonality?: number;
  };
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>({
    username: "",
    isAuthenticated: false,
    testScores: {
      leadership: undefined,
      neurodivergence: undefined,
      workplacePersonality: undefined,
    },
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
