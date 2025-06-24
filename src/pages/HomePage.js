import React, { useEffect, useState } from "react";
import CategoryTabs from "../components/CategoryTabs";
import CarouselRow from "../components/CarouselRow";
import ContinueWatching from "../components/ContinueWatching";   // ← NEW
import VideoModal from "../components/VideoModal";
import {
  getContinueWatching,
  addToContinueWatching,
  sanitizeContinueList,
} from "../utils/storage";

const HomePage = ({ searchTerm }) => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [modalVideo, setModalVideo] = useState(null);

  // continue-watching state
  const [continueList, setContinueList] = useState(() => getContinueWatching());

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);

        // Build a Set of all ids in data.json
        const validIds = new Set(
          data.categories.flatMap((cat) => cat.videos.map((v) => v.id))
        );

        // Clean localStorage + state in one shot
        setContinueList(sanitizeContinueList(validIds));
      });
  }, []);

  // open modal + save to “continue”
  const handlePreviewModal = (video) => {
    setModalVideo(video);
    addToContinueWatching(video);            // keep storage updated
    setContinueList(getContinueWatching());  // refresh state
  };

  const handleCloseModal = () => setModalVideo(null);

  /* ----- search filter logic ----- */
  const allVideos = categories.flatMap((c) => c.videos);
  const filteredVideos = allVideos.filter((v) =>
    v.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: 16 }}>
      {/* Continue Watching Row */}
      {continueList.length > 0 && !searchTerm && (
        <ContinueWatching
          videos={continueList}
          onVideoClick={handlePreviewModal}
          refreshList={setContinueList}       // for “remove from row”
        />
      )}

      {/* Tabs (hide during search) */}
      {!searchTerm && categories.length > 0 && (
        <CategoryTabs
          categories={categories}
          selected={activeTab}
          onChange={setActiveTab}
        />
      )}

      {/* Main content (search or category) */}
      {searchTerm ? (
        <CarouselRow
          title={`Results for "${searchTerm}"`}
          videos={filteredVideos}
          onVideoClick={handlePreviewModal}
        />
      ) : (
        categories[activeTab] && (
          <CarouselRow
            title={categories[activeTab].name}
            videos={categories[activeTab].videos}
            onVideoClick={handlePreviewModal}
          />
        )
      )}

      {/* Modal */}
      {modalVideo && (
        <VideoModal
          open={!!modalVideo}
          video={modalVideo}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default HomePage;
