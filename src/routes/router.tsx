import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import Report from '../pages/Report';
import ErrorPage from '../pages/ErrorPage';

import DefaultLayout from '../layout/DefaultLayout';
import { Home } from '../pages/Home';
import { InsertJobs } from '../pages/InsertJobs';
import { RequireAuth } from '../contexts/Auth/RequireAuth';
import AddJobs from '../pages/AddJobs';
import FeedJobs from '../pages/FeedJobs';
import ConfirmEmail from '../pages/ConfirmEmail';
import ResetPassword from '../pages/ResetPassword';
import ConfirmRegister from '../pages/ConfirmRegister';
import CompanyPortal from '../pages/CompanyPortal';
import CandidatePortal from '../pages/CandidatePortal';
import JobApply from '../pages/ApplyJob';
import { ProfileSettings } from '../pages/ProfileSettings';
import { CandidateSettings } from '../pages/CandidateSettings';
import CompanyApplications from '../pages/CompanyApplications';
import JobsPanel from '../pages/JobsPanel';
import MatchJobs from '../pages/MatchJobs';
import RenderArea from '../pages/CarouselAreas/RenderArea';
import CarouselLayout from '../layout/CarouselLayout';
import JourneyLayout from '../layout/JourneyLayout';

const NavRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="jobs" element={<FeedJobs />} />
                    <Route path="jobs/:searchTerm" element={<FeedJobs />} />

                    <Route path="areas" element={<CarouselLayout />}>
                        <Route path=":areaId" element={<RenderArea />} />
                    </Route>

                    <Route path='journey' element={<JourneyLayout/>}>
                    </Route>
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="confirm-email" element={<ConfirmEmail />} />
                <Route path="userconfirmation" element={<ConfirmRegister />} />
                <Route
                    path="companyconfirmation"
                    element={<ConfirmRegister />}
                />
                <Route path="recovery-password" element={<ResetPassword />} />

                {/* atualizar layout */}
                <Route
                    path="company-portal"
                    element={
                        <RequireAuth>
                            <CompanyPortal />
                        </RequireAuth>
                    }
                />

                {/* atualizar layout */}
                <Route
                    path="candidate-portal"
                    element={
                        <RequireAuth>
                            <CandidatePortal />
                        </RequireAuth>
                    }
                />

                {/* atualizar layout */}
                <Route
                    path="candidate-settings"
                    element={
                        <RequireAuth>
                            <CandidateSettings />
                        </RequireAuth>
                    }
                />

                {/* atualizar layout */}
                <Route
                    path="profile-settings"
                    element={
                        <RequireAuth>
                            <ProfileSettings />
                        </RequireAuth>
                    }
                />
                <Route
                    path="insertjob"
                    element={
                        <RequireAuth>
                            <InsertJobs />
                        </RequireAuth>
                    }
                />

                {/* atualizar layout */}
                <Route
                    path="applications"
                    element={
                        <RequireAuth>
                            <CompanyApplications />
                        </RequireAuth>
                    }
                />

                {/* atualizar layout */}
                <Route
                    path="jobs-panel"
                    element={
                        <RequireAuth>
                            <JobsPanel />
                        </RequireAuth>
                    }
                />

                {/* atualizar layout */}
                <Route
                    path="match-jobs"
                    element={
                        <RequireAuth>
                            <MatchJobs />
                        </RequireAuth>
                    }
                />

                <Route path="addjobs" element={<AddJobs />} />

                <Route
                    path="apply/:id"
                    element={
                        <RequireAuth>
                            <JobApply />
                        </RequireAuth>
                    }
                />

                <Route path="report/:id" element={<Report />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default NavRoutes;
