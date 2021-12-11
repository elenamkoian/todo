import './page-content.scss';
import { TaskList } from './task-list/task-list';
import { TaskDetails } from './task-details/task-details';
import { Component } from 'react';

export class PageContent extends Component {
  state = {
    taskList: [
      {
        title: 'personal to-do\'s',
        description: 'my personal staff',
        avatar: 'https://s3-alpha-sig.figma.com/img/4a28/0872/9dc399cae1699b498c1bfaf3748d9f5c?Expires=1639958400&Signature=GYQRttAUJYubUIRPBy5~Q1hkbHo38vwLKh0Y7fa0PHXNduUXQNTP7R~BavzzJaptwkMGqQekf8GwvxCo3WJF2oqA9m5ysozeHivWtoazwaVaw1e6Rkyx4FKDYZIDWL3raVYkafVZpJFwO5Id7rhwrVG0oz5ZHB06GezyfjbeaNdkxN3s7Jn8lf3kA-B1eFvHqTtE-Va7tZAg10at5NcVCwaNOP7zGiLj1xsyGSTdkwPttAyWl~cA6dv-prmoHrn4~5982b8OA1pbAN1ty99Eug77nyJA5ZSmmcBafiSve6RPVbjaDDFuhhbG5qv8T0ZXAE9eXPnytT8L8DCwE8f~DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        todos: [
          {
            name: 'go to school',
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
        ],
      },
      {
        title: 'remix everything',
        description: 'that\'s right everything',
        avatar: 'https://s3-alpha-sig.figma.com/img/7710/9261/c1e46545cfe89c25828a776a9ab7ecd1?Expires=1639958400&Signature=UwtuUn97WI3WRWSQoYIYUs~ZEFC0Ag1PGHK4MgpK9CuQ5iuCHP517VPfTh5krf9X2ItPko2w33afMLogLP7nQnS6urGyfeVEr8TGlQcCWwXRPbU1xFH4T6OHfA1qwbq4VaCEcmFbzQ02NH8ATSTITILEqaipVc2dqCS2MdM07iaFiZ4lYMv0RQ8CkaLiC52LkiI~xUB2JbuclDUglkVwIzcYNnbm3l775yvL84oqrRPNLgUKxpLTC0RSzL4yU2TvCdxCa5oSwYVltkGEr-DRjWozZAks5rLkkw2wYjY6lweM9G6DRq3Y57jtS0lLZ9aXc1IGHe8eoTH97ifJSTwEfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        todos: [
          {
            name: 'wash the dishes',
            isDone: false,
          },
          {
            name: 'clean the house',
            isDone: false,
          },
        ],
      },
      {
        title: 'for emoji\'s lovers',
        description: 'with avatars or upload your custom avatar',
        avatar: 'https://s3-alpha-sig.figma.com/img/2666/d7a7/353563a13f8121e77ec21d3d818bc086?Expires=1639958400&Signature=ZAKfoP9TqyoVYrtLPSTBJfhXmFuhAkmbfrDw7oZZPlt2734pXUrsZlVyEPGm~D5WESQZX2aWvABWX4kY1Dvc5lJTffGgFmo2BpiRepfJ2J8pYbF-bXC42TGzYgE9hEMmTTRJrtNFq4GzYqGp2y33bZUMQct6LA2A2yTJCBNrnj5RFTi6llSJHlAKR2S~TSxdi0dmuFrRNWr8WrpJPEbbWtajgK6UfShwLz7xf603AiaDz49M4PfX0S1FewK92wOBW4OGzZKNEn1YxiPoJvvu5Q8J0ihMOW1eX-6mChY0Zxkl39WFUsyXDniWZvSlk7nsBswTbF6~J2j49Kb8Erzh0w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        todos: [
          {
            name: 'go to work',
            isDone: false,
          },
          {
            name: 'do ironing',
            isDone: false,
          },
          {
            name: 'go for shopping',
            isDone: false,
          },
        ],
      },
    ],
    selectedTask: 0,
  };

  render() {
    return (
      <div className="PageContent">
        <TaskList
          taskList={this.state.taskList}
          activeTaskId={this.state.selectedTask}
          onSelectedTaskClick={(index) => this.handleSelectedTask(index)}
        />
        <TaskDetails
          taskList={this.state.taskList}
          selectedTask={this.state.selectedTask}
        />
      </div>
    );
  }

  handleSelectedTask = (index) => {
    this.setState({
      selectedTask: index,
    });
  };
}
