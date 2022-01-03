import './App.css';
import { Header } from './components/header/header';
import { PageContent } from './pages/home-page/page-content/page-content';
import { Route, Routes } from 'react-router-dom';
import { CreateTaskForm } from './pages/home-page/page-content/create-task-form/create-task-form';
import { TaskDetails } from './pages/home-page/page-content/task-details/task-details';

function App() {
  return (
    <div className="AppRoot">
      <Header />
      <PageContent>
        <Routes>
          <Route path="/create" element={<CreateTaskForm />} />
          <Route path="/:taskIndex" element={<TaskDetails />} />
        </Routes>
      </PageContent>
    </div>
  );
}

export default App;
