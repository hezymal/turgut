import { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DashboardPage } from "pages/DashboardPage";
import { CreateExaminationPage } from "pages/CreateExaminationPage";
import { ExaminationListPage } from "pages/ExaminationListPage";
import { GlobalStyle } from "ui/GlobalStyle";
import { Layout } from "./components/Layout";

export const App: FC = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<DashboardPage />} />
                        <Route
                            path="/examinations"
                            element={<ExaminationListPage />}
                        />
                        <Route
                            path="/examinations/create"
                            element={<CreateExaminationPage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
};
