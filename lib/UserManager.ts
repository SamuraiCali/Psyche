export interface UserData {
  email: string;
  scores: {
    id: number;
    testName: string;
    score: number;
    date: string;
    outcome?: string;
  }[];
}

class UserManager {
  private static instance: UserManager;
  private currentUser: UserData | null = null;

  private constructor() {
    // Load user data from localStorage on initialization
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  static getInstance(): UserManager {
    if (!UserManager.instance) {
      UserManager.instance = new UserManager();
    }
    return UserManager.instance;
  }

  login(email: string): void {
    this.currentUser = { email, scores: [] };
    this.saveToLocalStorage();
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem("currentUser");
  }

  getCurrentUser(): UserData | null {
    return this.currentUser;
  }

  addScore(testName: string, score: number, outcome?: string): void {
    if (this.currentUser) {
      const newScore = {
        id: this.currentUser.scores.length + 1,
        testName,
        score,
        date: new Date().toISOString().split("T")[0],
        outcome,
      };
      this.currentUser.scores.push(newScore);
      this.saveToLocalStorage();
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
  }
}

export default UserManager;
