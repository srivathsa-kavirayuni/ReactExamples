import React from 'react';

import Album from './Album';

const AlbumsGrid = ({ data }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {data.map(albums => (<Album key={albums.id} album={albums} />))}
    </div>
);

export default AlbumsGrid;
