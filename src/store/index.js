import { createStore } from 'vuex';
import router from '@/router';
import {
    getFirestore,
    collection,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore';
import firebaseApp from '../firebaseconfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, auth } from '@/auth';

const db = getFirestore(firebaseApp);
const usuariosRef = collection(db, 'usuarios');

export default createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        async login({ commit }, userData) {
            try {
                console.log('userData:', userData);
                const userCredential = await signInWithEmailAndPassword(auth, userData.email, userData.password);
                const user = userCredential.user;
                this.user = user;
                console.log('Usuario autenticado:', user);
                commit('setUser', user);
                return true;
              } catch (error) {
                console.error('Error al autenticar:', error.message);
                return false;
              }
            
        },
        async register({ commit }, userData) {
            console.log('Registrando usuario:', userData);
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    userData.email,
                    userData.password
                );
                const user = userCredential.user;
                console.log('Usuario registrado:', user);
                commit('setUser', user);
                this.$router.push('/home');
            } catch (error) {
                console.error('Error al registrar:', error.message);
            }
        },
        logout({ commit }) {
            commit('setUser', null);
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.user,
    },
});
