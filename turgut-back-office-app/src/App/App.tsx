import { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DashboardPage } from "pages/DashboardPage";
import { CreateExaminationPage } from "pages/CreateExaminationPage";
import { ExaminationListPage } from "pages/ExaminationListPage";
import { ExaminationPage } from "pages/ExaminationPage";
import { GlobalStyle } from "ui/GlobalStyle";
import { Layout } from "./components/Layout";

export const App: FC = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<DashboardPage />} />
                        <Route path="examinations">
                            <Route index element={<ExaminationListPage />} />
                            <Route
                                path="create/*"
                                element={<CreateExaminationPage />}
                            />
                            <Route
                                path=":examinationId"
                                element={<ExaminationPage />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
};
