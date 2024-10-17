import React, { useState } from 'react';
import './HelpGuide.css'; 

const HelpGuide = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      title: "Step 1: Start the Pose",
      content: "Click on the 'Start Pose' button to begin. The timer will start and the pose will be detected in real-time."
    },
    {
      title: "Step 2: Maintain the Pose",
      content: "Hold the pose for as long as you can. The system will track your time and display it."
    },
    {
      title: "Step 3: Stop the Pose",
      content: "Click on the 'Stop Pose' button to end. The best time will be recorded and displayed."
    },
    {
      title: "Step 4: Stop the Pose",
      content: "Click on the 'Tree' button and navigate to other pose demo and follow same step."
    },
    {
      title: "Tips for Best Results",
      content: "Ensure you are in a well-lit area and stand clearly in front of the camera for accurate pose detection."
    }
  ];

  const handleNextPage = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="help-container1">
      <div className="help-box">
        <div className="page">
          <h2>{pages[currentPage - 1].title}</h2>
          <p>{pages[currentPage - 1].content}</p>
          <div className="navigation-buttons">
            {currentPage === 1 && <button onClick={() => window.history.back()} className="back-button">Back</button>}
            {currentPage > 1 && <button onClick={handlePreviousPage}>Previous</button>}
            {currentPage < pages.length && <button onClick={handleNextPage}>Next</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpGuide;
