const welcome = document.getElementById("video")
const bouton = document.getElementById("button_welcome")
const title = document.getElementById("welcome_container")
const mainContent = document.getElementById("main_content")
const body = document.querySelector("body")

bouton.addEventListener("click",() => {

welcome.classList.replace("video_welcome","video_end")
title.classList.add("video_end")
body.classList.remove("animation_video")
body.classList.remove("video_out_color")
mainContent.classList.remove("video_end")
})