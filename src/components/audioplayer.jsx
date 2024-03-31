import React from 'react';
//import './audioplayer.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, useRef } from 'react';

function audioplayer() {
  
  const [quran, setChapters] = useState([])
  const [reciters, setReciters] = useState([])
  const [selectedChapterId, setSelectedChapterId] = useState('1');
  const [selectedReciterId, setSelectedReciterId] = useState('1');
  const [audioUrl, setAudioUrl] = useState('');
  const audioRef = useRef();

  const getChapter = async() =>{
    const res = await fetch("https://api.quran.com/api/v4/chapters");
    const data = await res.json();
    setChapters(data.chapters)
  }
  const getReciters = async() =>{
    const res = await fetch("https://api.quran.com/api/v4/resources/recitations");
    const data = await res.json();
    setReciters(data.recitations)
  }
  const handleChapterSelect = (e) => {
    const selectedId = e.target.value;
    setSelectedChapterId(selectedId);
  };
  const handleReciterSelect = (e) => {
    const selectedId = e.target.value;
    setSelectedReciterId(selectedId);
  };
  const getAudio = async() =>{
    const res = await fetch("https://api.quran.com/api/v4/chapter_recitations/"+selectedReciterId+"/"+selectedChapterId);
    const data = await res.json();
    setAudioUrl(data.audio_file.audio_url);
  }
  const handleAudioChange = () => {};

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  }, [audioUrl]);

  useEffect(() => {
    getChapter();
    getReciters();
    getAudio();
  }, [])
  
  return (
    <div>
      <div>
        <label htmlFor="chapter-select">Select a Quran Chapter:</label>
        <select id="chapter-select" onChange={handleChapterSelect} value={selectedChapterId}>
            <option value="">Select Chapter</option>
            {quran.map((chapter) => (
            <option key={chapter.id} value={chapter.id}>
                {chapter.name_simple}
            </option>
            ))}
        </select>

        <label htmlFor="qari-select">Select a Reciter/Qari:</label>
        <select id="qari-select"onChange={handleReciterSelect} value={selectedReciterId}>
            <option value="">Select Qari</option>
            {reciters.map((recitations) => (
            <option key={recitations.id} value={recitations.id}>
                {recitations.reciter_name}
            </option>
            ))}
        </select>

        <button className="btn btn-success" onClick={getAudio} disabled={!selectedChapterId}>
            Find Audio
        </button>
      </div>

      <div>
        {audioUrl && (
        <audio controls ref={audioRef} onLoadedData={handleAudioChange}>
            <source src={audioUrl} type="audio/mp3" />
        </audio>)}
      </div>
    </div>
  )
}

export default audioplayer