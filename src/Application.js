import React from 'react';
import styled from 'styled-components';

const videos = [
  { id: 2, title: 'Azure AI', url: 'videos/azure-ai-suck.mp4' },
  { id: 1, title: 'Dilema...', url: 'videos/vlad-cevapi.mp4' },
  { id: 2, title: 'Di si lipa', url: 'videos/disilipi.mp4' },
  { id: 3, title: 'Bila jedna baba...', url: 'videos/miki-baba.mp4' },
  { id: 4, title: 'Bila jedna baba...', url: 'videos/plenki-baba.mp4' },
];
const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const VideoItem = styled.div`
  flex: 0 0 100%;
  margin: 1%;
  background-color: #000;
  color: #fff;
  padding: 10px;

  @media (min-width: 600px) {
    flex: 0 0 45%;
  }

  @media (min-width: 900px) {
    flex: 0 0 30%;
  }
`;

const Video = ({ video }) => (
  <VideoItem key={video.id}>
    <h2>{video.title}</h2>
    <video width="100%" controls loop>
      <source src={video.url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </VideoItem>
);

const VideoLibrary = () => (
  <VideoGrid>
    {videos.map(video => <Video key={video.id} video={video} />)}
  </VideoGrid>
);

export default VideoLibrary;