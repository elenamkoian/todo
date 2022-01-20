import './App.css';
import { Header } from './components/header/header';
import { PageContent } from './pages/_page-shell/page-content';
import { Route, Routes } from 'react-router-dom';
import { CreateTaskForm } from './pages/create-task/create-task-form';
import { TaskDetails } from './pages/task-details/task-details';

function App() {
  return (
    <div className="AppRoot">
      <Header />
      <PageContent>
        <Routes>
          <Route path="/create" element={<CreateTaskForm />} />
          <Route path="/:taskUid" element={<TaskDetails />} />
        </Routes>
      </PageContent>
    </div>
  );
}

export default App;
