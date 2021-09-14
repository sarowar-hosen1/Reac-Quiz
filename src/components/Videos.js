import React, { useState } from 'react';
import Video from "./Video"
import { Link } from "react-router-dom";
import useVideoList from '../hooks/useVideoList';
import InfiniteScroll from 'react-infinite-scroll-component';

const Videos = () => {

    const [page, setPage] = useState(1);
    const { loading, error, videos, hasMore } = useVideoList(page);


    return (
        <>
            {
                videos.length > 0 && (
                    <InfiniteScroll
                        dataLength={videos.length}
                        hasMore={hasMore}
                        next={() => setPage(page + 8)}
                        loader={<h5>Loading...</h5>}
                    >
                        {videos.map(video =>
                            video.noq > 0 ?
                                (
                                    <Link
                                        to={{
                                            pathname: `/quiz/${video.youtubeID}`,
                                            state: video.title
                                        }}
                                        key={video.youtubeID}
                                    >
                                        <Video
                                            title={video.title}
                                            id={video.youtubeID}
                                            noq={video.noq}
                                        />
                                    </Link>
                                )
                                :
                                <Video
                                    title={video.title}
                                    id={video.youtubeID}
                                    noq={video.noq}
                                />
                        )}
                    </InfiniteScroll>
                )}
            {!loading && videos.length === 0 && <div>No data found!</div>}
            {error && <div>There was an error</div>}
            {loading && <div>Loading...</div>}
        </>
    );
};

export default Videos;