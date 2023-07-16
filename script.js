"use strict"

const nameElement=document.querySelector(".name-container")
const roleElement=document.querySelector(".role-container")
const picElement=document.querySelector(".photo-container")

//Creo un array di objects che contiene le informazioni dei membri del team
const teamMembers = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
]

//Ciclo for che stampa in console le chiavi degli oggetti dentro l'array
for (let i = 0; i < teamMembers.length; i++) {
    const singleMember = teamMembers[i]

    console.log(singleMember.nome);
    console.log(singleMember.ruolo);
    console.log(singleMember.foto);

    nameElement.innerHTML+= `<div class="single-name">${singleMember.nome}</div>`
    roleElement.innerHTML+= `<div class="single-name">${singleMember.ruolo}</div>`
    picElement.innerHTML+= `<div class="single-name">${singleMember.foto}</div>`
}


