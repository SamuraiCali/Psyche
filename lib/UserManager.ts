export interface UserData {
  email: string;
  scores: {
    id: number;
    testName: string;
    score: number;
    date: string;
  }[];
}

class UserManager {
  private static instance: UserManager;
  private currentUser: UserData | null = null;

  private constructor() {}

  static getInstance(): UserManager {
    if (!UserManager.instance) {
      UserManager.instance = new UserManager();
    }
    return UserManager.instance;
  }

  login(email: string): void {
    this.currentUser = { email, scores: [] };
  }

  logout(): void {
    this.currentUser = null;
  }

  getCurrentUser(): UserData | null {
    return this.currentUser;
  }

  addScore(testName: string, score: number): void {
    if (this.currentUser) {
      const newScore = {
        id: this.currentUser.scores.length + 1,
        testName,
        score,
        date: new Date().toISOString().split("T")[0],
      };
      this.currentUser.scores.push(newScore);
    }
  }
}

export default UserManager;
