import './page-content.scss';
import { TaskList } from './task-list/task-list';
import { TaskDetails } from './task-details/task-details';

export const PageContent = () => {
  const taskList = [
    {
      title: 'personal to-do\'s',
      description: 'my personal staff',
      avatar: 'https://s3-alpha-sig.figma.com/img/4a28/0872/9dc399cae1699b498c1bfaf3748d9f5c?Expires=1639958400&Signature=GYQRttAUJYubUIRPBy5~Q1hkbHo38vwLKh0Y7fa0PHXNduUXQNTP7R~BavzzJaptwkMGqQekf8GwvxCo3WJF2oqA9m5ysozeHivWtoazwaVaw1e6Rkyx4FKDYZIDWL3raVYkafVZpJFwO5Id7rhwrVG0oz5ZHB06GezyfjbeaNdkxN3s7Jn8lf3kA-B1eFvHqTtE-Va7tZAg10at5NcVCwaNOP7zGiLj1xsyGSTdkwPttAyWl~cA6dv-prmoHrn4~5982b8OA1pbAN1ty99Eug77nyJA5ZSmmcBafiSve6RPVbjaDDFuhhbG5qv8T0ZXAE9eXPnytT8L8DCwE8f~DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      todos: [
        {
          name: 'wash the dishes',
          isDone: false,
        },
        {
          name: 'go for shopping',
          isDone: false,
        },
        {
          name: 'do ironing',
          isDone: false,
        },
      ]
    },
    {
      title: 'remix everything',
      description: 'that\'s right everything' ,
      avatar: 'https://s3-alpha-sig.figma.com/img/4a28/0872/9dc399cae1699b498c1bfaf3748d9f5c?Expires=1639958400&Signature=GYQRttAUJYubUIRPBy5~Q1hkbHo38vwLKh0Y7fa0PHXNduUXQNTP7R~BavzzJaptwkMGqQekf8GwvxCo3WJF2oqA9m5ysozeHivWtoazwaVaw1e6Rkyx4FKDYZIDWL3raVYkafVZpJFwO5Id7rhwrVG0oz5ZHB06GezyfjbeaNdkxN3s7Jn8lf3kA-B1eFvHqTtE-Va7tZAg10at5NcVCwaNOP7zGiLj1xsyGSTdkwPttAyWl~cA6dv-prmoHrn4~5982b8OA1pbAN1ty99Eug77nyJA5ZSmmcBafiSve6RPVbjaDDFuhhbG5qv8T0ZXAE9eXPnytT8L8DCwE8f~DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      todos: [
        {
          name: 'wash the dishes',
          isDone: false,
        },
        {
          name: 'go for shopping',
          isDone: false,
        },
      ]
    },{
      title: 'for emoji\'s lovers',
      description: 'with avatars or upload your custom avatar',
      avatar: 'https://s3-alpha-sig.figma.com/img/4a28/0872/9dc399cae1699b498c1bfaf3748d9f5c?Expires=1639958400&Signature=GYQRttAUJYubUIRPBy5~Q1hkbHo38vwLKh0Y7fa0PHXNduUXQNTP7R~BavzzJaptwkMGqQekf8GwvxCo3WJF2oqA9m5ysozeHivWtoazwaVaw1e6Rkyx4FKDYZIDWL3raVYkafVZpJFwO5Id7rhwrVG0oz5ZHB06GezyfjbeaNdkxN3s7Jn8lf3kA-B1eFvHqTtE-Va7tZAg10at5NcVCwaNOP7zGiLj1xsyGSTdkwPttAyWl~cA6dv-prmoHrn4~5982b8OA1pbAN1ty99Eug77nyJA5ZSmmcBafiSve6RPVbjaDDFuhhbG5qv8T0ZXAE9eXPnytT8L8DCwE8f~DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      todos: [
        {
          name: 'wash the dishes',
          isDone: false,
        },
        {
          name: 'go for shopping',
          isDone: false,
        },
      ]
    },
  ];

  return (
    <div className="PageContent">
      <TaskList taskList={taskList} />
      <TaskDetails taskList={taskList}/>
    </div>
  );
};
