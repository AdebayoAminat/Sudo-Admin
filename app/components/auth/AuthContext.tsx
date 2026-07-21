"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  currentUser: any;
  userRole: string;
  userGroups: string[];
  userPermissions: string[];
  fetchingData: boolean;
  refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper mimicking loginApi from your service
import { AuthService } from "@/app/service/auth.service";

const authService = new AuthService();

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userRole, setUserRole] = useState<string>("");
  const [userGroups, setUserGroups] = useState<string[]>([]);
  const [userPermissions, setUserPermissions] = useState<string[]>([]);
  const [fetchingData, setFetchingData] = useState<boolean>(true);

  const getUserData = async () => {
    setFetchingData(true);
    try {
      // Replicating your Angular: const res = await loginApi.post("authenticated/user");
      const res = await authService.getAuthenticatedUser();
      
      if (res.status === 200 && res.data) {
       const userData = res.data.data ? res.data.data : res.data;
  setCurrentUser(userData);

        // Extract Role
        const role = userData.roleDetails?.role?.identifier || "";
        setUserRole(role);

        // Extract Groups and Permissions
        const groupInfo = userData.roleDetails?.groupDetails || [];
        let extractedGroups: string[] = [];
        let extractedPermissions: string[] = [];

        if (groupInfo.length > 0) {
          groupInfo.forEach((el: any) => {
            if (el.group?.identifier) {
              extractedGroups.push(el.group.identifier);
            }
            if (el.permissions) {
              const permissions = el.permissions.map((e: any) => e.identifier);
              extractedPermissions = [...extractedPermissions, ...permissions];
            }
          });
        }

        setUserGroups(extractedGroups);
        setUserPermissions(extractedPermissions);
      }
    } catch (error) {
      console.error("Error fetching authenticated user:", error);
    } finally {
      setFetchingData(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userRole,
        userGroups,
        userPermissions,
        fetchingData,
        refreshUserData: getUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use permissions anywhere in your app
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}