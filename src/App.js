import { Header } from './components/header/header';
import { PageContent } from './pages/_page-shell/page-content';
import { Route, Routes } from 'react-router-dom';
import { CreateTaskForm } from './pages/create-task/create-task-form';
import { TaskDetails } from './pages/task-details/task-details';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles(() => ({
    AppRoot: {
      height: '100%',
      backgroundColor: '#272a31',
    },
  }
));

function App() {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="AppRoot">
        <Header />
        <PageContent>
          <Routes>
            <Route path="/create" element={<CreateTaskForm />} />
            <Route path="/:taskUid" element={<TaskDetails />} />
          </Routes>
        </PageContent>
      </div>
    </PatchStyles>
  );
}

export default App;
