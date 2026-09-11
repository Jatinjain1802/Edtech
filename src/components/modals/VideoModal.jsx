// src/components/modals/VideoModal.jsx
import React from 'react';
import Modal from '../common/Modal';

/**
 * LEARNING POINT (Responsive Iframe & Embedded Media):
 * Video player embeds require a fixed aspect-ratio wrapper (`aspect-video`) 
 * so that video height scales smoothly on mobile screens without overflow.
 */
export const VideoModal = ({ isOpen, onClose, videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ' }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Platform Demo & Overview" maxWidth="max-w-4xl">
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
        <iframe
          className="w-full h-full border-0"
          src={isOpen ? "https://www.youtube-nocookie.com/embed/g3-VxLQO7do?autoplay=1" : ""}
          title="EduPulse Overview Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-4 text-center">
        <p className="text-xs text-slate-500">
          Discover how 10,000+ students build career-ready web apps, AI systems, and design projects with EduPulse.
        </p>
      </div>
    </Modal>
  );
};

export default VideoModal;
