import { defineStore } from "pinia";
import router from '@/router'; // kamu sudah punya router instance
import type { Router } from 'vue-router'; // kalau kamu masih butuh tipe Router

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  errors: Record<string, never>;
}

export const useAuthStore = defineStore("authStore", {
  state: (): AuthState => ({
    user: null,
    errors: {},
  }),

  actions: {
    /******************* Get authenticated user *******************/
    async getUser() {
      if (localStorage.getItem("token")) {
        const res = await fetch("/api/user", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          this.user = data;
        }
      }
    },

    /******************* Login or Register user *******************/
    async authenticate(apiRoute: string, formData: any) {
      const res = await fetch(`/api/${apiRoute}`, {
        method: "post",
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.errors) {
        this.errors = data.errors;
      } else {
        this.errors = {};
        localStorage.setItem("token", data.token);
        this.user = data.user;
        router.push({ name: "dashboard" }); // route valid
      }
    },

    /******************* Logout user *******************/
    async logout() {
      const res = await fetch("/api/logout", {
        method: "post",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        this.user = null;
        this.errors = {};
        localStorage.removeItem("token");
        router.push({ name: "login" }); // kembali ke login
      }
    },
  },
});
