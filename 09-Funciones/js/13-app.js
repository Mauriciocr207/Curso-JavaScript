const reproductor = {
    song: '',
    play: id => console.log(`Reproduciendo canción...${id}`),
    stop: () => console.log('Pausando...'),
    delete: id => console.log(`borrando canción ${id}`),
    createPlaylist: name => console.log(`Creando playlist de ${name}`),
    playPlaylist: name => console.log(`Reproduciendo ${name}`),

    set newSong(song) {
        this.song = song;
        console.log(`Añadiendo ${song}`);
    },
    get getSong() {
        console.log(`${this.song}`);
    }
}

reproductor.play(30);
reproductor.stop();
reproductor.delete(30);
reproductor.createPlaylist("top hits");
reproductor.playPlaylist("top hits");
reproductor.newSong = "Hello";
reproductor.getSong;