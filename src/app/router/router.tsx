// import React from 'react'; 
import { Routes, BrowserRouter, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import Layout from '../../widget/layout/layout';
// import HomePage from '../../pages/home/home'
import SearchPage from '../../pages/search/search'
import ExplorePage from '../../pages/explore/explore'
import ReelsPage from '../../pages/reels/reels'
import MessagesPage from '../../pages/messages/messages'
import NotificationPage from '../../pages/notification/notification'
import CreatePage from '../../pages/create/create'
import ProfilePage from '../../pages/profile/profile'

const HomePage = lazy(() => import('../../pages/home/home'));
// import SearchPage from '@/pages/search/search.tsx'; 
// const ExplorePage = lazy(() => import('@pages/explore/explore')); 

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className=" flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="explore" element={<ExplorePage />} />
            <Route path="reels" element={<ReelsPage />} />
            <Route path="messages" element={<MessagesPage/>} />
            <Route path="notifications" element={<NotificationPage/>} />
            <Route path="create" element={<CreatePage/>} />
            <Route path="profile" element={<ProfilePage/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
