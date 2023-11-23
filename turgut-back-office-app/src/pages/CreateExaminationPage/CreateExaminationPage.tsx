import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Page } from "common/Page";
import { Tree, TreeItem } from "ui/Tree";
import { NavLink } from "ui/Link";

import { CompletionSection } from "./components/CompletionSection";
import { IntroductionForm } from "./components/IntroductionForm";
import { TaskForm } from "./components/TaskForm";

export const CreateExaminationPage: FC = () => {
    return (
        <Page
            content={
                <Routes>
                    <Route index element={<IntroductionForm />} />
                    <Route path="tasks/:taskNumber" element={<TaskForm />} />
                    <Route path="completion" element={<CompletionSection />} />
                </Routes>
            }
            aside={
                <Tree>
                    <TreeItem>
                        <NavLink to="/examinations/create" end>
                            Introduction
                        </NavLink>
                    </TreeItem>
                    <TreeItem>
                        <NavLink to="/examinations/create/tasks/1">
                            Task #1
                        </NavLink>
                    </TreeItem>
                    <TreeItem>
                        <NavLink to="/examinations/create/tasks/2">
                            Task #2
                        </NavLink>
                    </TreeItem>
                    <TreeItem>
                        <NavLink to="/examinations/create/tasks/3">
                            Task #3
                        </NavLink>
                    </TreeItem>
                    <TreeItem>
                        <NavLink to="/examinations/create/tasks/4">
                            Task #4
                        </NavLink>
                    </TreeItem>
                    <TreeItem>
                        <NavLink to="/examinations/create/tasks/5">
                            Task #5
                        </NavLink>
                    </TreeItem>
                    <TreeItem>
                        <NavLink to="/examinations/create/tasks/6">
                            Task #6
                        </NavLink>
                    </TreeItem>
                    <TreeItem>
                        <NavLink to="/examinations/create/tasks/7">
                            Task #7
                        </NavLink>
                    </TreeItem>
                    <TreeItem>
                        <NavLink to="/examinations/create/completion">
                            Completion
                        </NavLink>
                    </TreeItem>
                </Tree>
            }
        />
    );
};
