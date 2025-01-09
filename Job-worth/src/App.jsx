import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import OnboardingPage from './pages/OnboardingPage.jsx';
import JobListing from './pages/JobListing.jsx';
import JobPage from './pages/JobPage.jsx';
import JobPosting from './pages/JobPosting.jsx';
import SavedJobs from './pages/SavedJobs.jsx';
import MyJobs from './pages/MyJobs.jsx';
import { ThemeProvider } from './components/theme-provider.jsx';

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: '/on-boarding',
                element: <OnboardingPage />,
            },
            {
                path: '/jobs',
                element: <JobListing />,
            },
            {
                path: '/job/:id',
                element: <JobPage />,
            },
            {
                path: '/post-job',
                element: <JobPosting />,
            },
            {
                path: '/saved-jobs',
                element: <SavedJobs />,
            },
            {
                path: '/my-jobs',
                element: <MyJobs />,
            },
        ],
    },
]);

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
