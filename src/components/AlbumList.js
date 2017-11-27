import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    constructor() {
        super();
        this.state = {
            albums: []
        };
    }

    componentWillMount() {
        axios
            .get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                if (response && response.status === 200 && response.data) {
                    this.setState({
                        albums: response.data
                    });
                }
            });
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }  
}

export default AlbumList;
