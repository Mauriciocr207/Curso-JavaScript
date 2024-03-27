const reproductor = {
    play: function(id) {
        console.log(`Reproduciendo canción...${id}`);
    },
    stop: function() {
        console.log('Pausando...');
    },
    delete: function(id) {
        console.log(`borrando canción ${id}`);
    },
    createPlaylist: function(name) {
        console.log(`Creando playlist de ${name}`);
    },
    playPlaylist: function(name) {
        console.log(`Reproduciendo ${name}`);
    }
}

reproductor.play(30);
reproductor.stop();
reproductor.delete(30);
reproductor.createPlaylist("top hits");
reproductor.playPlaylist("top hits");

