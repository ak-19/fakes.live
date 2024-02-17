import React, {useRef, useState } from 'react';
import styled from 'styled-components';

const videos = [
  
  { id: 9, title: 'Hrvatski Titanik', url: 'videos/hrvatski-titanik.mp4' },
  { id: 8, title: 'Alhambra AI', url: 'videos/alhambra-ai.mp4' },
  { id: 7, title: 'Celebs...', url: 'videos/budist-celebs.mp4' },
  { id: 6, title: 'Otvaranje firme...', url: 'videos/otvaranje-firme.mp4' },
  { id: 5, title: 'Azure AI', url: 'videos/azure-ai-suck.mp4' },
  { id: 4, title: 'Dilema...', url: 'videos/vlad-cevapi.mp4' },
  { id: 3, title: 'Di si lipa', url: 'videos/disilipi.mp4' },
  { id: 2, title: 'Bila jedna baba...', url: 'videos/miki-baba.mp4' },
  { id: 1, title: 'Bila jedna baba...', url: 'videos/plenki-baba.mp4' },
  { id: 0, title: 'Sretna nova 2024', url: 'videos/sretna-2024-plenki.mp4' },
  { id: -1, title: 'Sretna nova 2024', url: 'videos/sretna-2024-miki.mp4' },
  { id: -2, title: 'Sretna nova 2024', url: 'videos/sretna-2024-tito.mp4' },
  
];
const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const VideoItem = styled.div`
  flex: 0 0 100%;
  margin: 1%;
  color: black;
  padding: 10px;

  @media (min-width: 600px) {
    flex: 0 0 45%;
  }

  @media (min-width: 900px) {
    flex: 0 0 30%;
  }
`;

const Video = ({ video }) => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoClick = () => {
    if (play) videoRef.current.pause();
    else videoRef.current.play();
    setPlay(!play);
  }

  return (<VideoItem key={video.id}>
    <h1>{video.title}</h1>
    <video width="100%" ref={videoRef} onClick={onVideoClick} loop src={video.url}>
      Your browser does not support the video tag.
    </video>
  </VideoItem>)
};

const VideoLibrary = () => (
  <VideoGrid>
    {videos.map(video => <Video key={video.id} video={video} />)}
  </VideoGrid>
);

export default VideoLibrary;