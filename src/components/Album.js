import React from 'react';
import styled from 'styled-components/macro';

const Album = ({ album }) => (
    <StyledAlbum>
        <img src={album.url} alt={'image'} />
        <h3>{album.title}</h3>
    </StyledAlbum>
);


export const StyledAlbum = styled.div`
  img {
    width: 200px;
    height: 200px;
  }
`;

export default Album
