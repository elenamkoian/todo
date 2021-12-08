import './home-page.scss'
import { Header } from '../header/header';
import { PageContent } from '../page-content/page-content';

export const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <PageContent />
    </div>
  )
}
