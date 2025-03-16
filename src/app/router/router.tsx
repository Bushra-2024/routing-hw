import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { FC, lazy, Suspense } from 'react';
import Layout from '@/widget/layout/layout';

const HomePage = lazy(() => import('@/pages/home/home'));
const SearchPage = lazy(() => import('@/pages/search/search'));
const ExplorePage = lazy(() => import('@/pages/reels/reels')); 
const ReelsPage = lazy(() => import('@/pages/reels/reels')); 
const MessagesPage = lazy(() => import('@/pages/messages/messages')); 
const NotificationPage = lazy(() => import('@/pages/notification/notification')); 
const CreatePage = lazy(() => import('@/pages/create/create')); 
const ProfilePage = lazy(() => import('@/pages/profile/profile')); 

const AppRouter: FC=() =>{
  return (
    <BrowserRouter>
      <Suspense fallback={<div className=" flex items-center m-auto font-semibold text-4xl justify-center">Loading...</div>}>
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
export default AppRouter