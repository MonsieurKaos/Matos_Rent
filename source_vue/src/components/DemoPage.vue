<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar is-primary">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <strong>Demo Vue + Bulma</strong>
          </a>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <section class="hero is-info is-bold">
        <div class="hero-body">
          <p class="title">Bienvenue dans la démonstration</p>
          <p class="subtitle">Découvrez ce que Bulma et Vue peuvent faire ensemble !</p>
        </div>
      </section>
  
      <!-- Main Content -->
      <div class="container mt-5">
        <!-- Buttons -->
        <div class="buttons">
          <button class="button is-success" @click="showModal = true">Ouvrir une Modale</button>
          <button class="button is-danger" @click="showMessage = true">Afficher un Message</button>
        </div>
  
        <!-- Message Box -->
        <article class="message is-danger mt-4" v-if="showMessage">
          <div class="message-header">
            <p>Attention</p>
            <button class="delete" aria-label="delete" @click="showMessage = false"></button>
          </div>
          <div class="message-body">
            Ceci est un message d'alerte ! Cliquez sur la croix pour le fermer.
          </div>
        </article>
  
        <!-- Form Section -->
        <div class="box mt-4">
          <h2 class="title is-4">Formulaire d'exemple</h2>
          <div class="field">
            <label class="label">Nom</label>
            <div class="control">
              <input class="input" type="text" placeholder="Votre nom" v-model="formData.name" />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="Votre email" v-model="formData.email" />
            </div>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Votre message" v-model="formData.message"></textarea>
            </div>
          </div>
          <button class="button is-primary" @click="submitForm">Envoyer</button>
        </div>
      </div>
  
      <!-- Modal -->
      <div class="modal" :class="{ 'is-active': showModal }">
        <div class="modal-background" @click="showModal = false"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Ceci est une modale</p>
            <button class="delete" aria-label="close" @click="showModal = false"></button>
          </header>
          <section class="modal-card-body">
            Voici une démonstration d'une modale. Vous pouvez y placer n'importe quel contenu !
          </section>
          <footer class="modal-card-foot">
            <button class="button" @click="showModal = false">Fermer</button>
          </footer>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DemoPage",
    data() {
      return {
        showModal: false,
        showMessage: false,
        formData: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        alert(
          `Formulaire soumis avec succès !\nNom : ${this.formData.name}\nEmail : ${this.formData.email}\nMessage : ${this.formData.message}`
        );
        // Réinitialise le formulaire
        this.formData = { name: "", email: "", message: "" };
      },
    },
  };
  </script>
  
  <style scoped>
  .mt-4 {
    margin-top: 1.5rem;
  }
  .mt-5 {
    margin-top: 3rem;
  }
  </style>
  