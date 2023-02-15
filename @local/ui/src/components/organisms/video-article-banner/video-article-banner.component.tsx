import { TopicButton } from '../../atoms/button/button.component';
import { VideoArticle } from '../../molecules/video-article/video-article.component';
import { IArticle } from '../../molecules/article/article.types';

/* eslint-disable-next-line */
export interface VideoArticleBannerProps {
  articles?: IArticle[];
  title?: string;
  buttonText?: string;
  twTitle?: string;
  twArticle?: string;
  twArticleImg?: string;
  twArticleImgIcon?: string;
  twPrimaryArticle?: string;
  twSecondaryArticle?: string;
  twSecondaryArticleIconSize?: string;
  twArticleTitle?: string;
  twArticleCategory?: string;
  twArticleButton?: string;
  twArticleButtonBx?: string;
  twArticleGrid?: string;
  twContainer?: string;
  twBackground?: string;
}

export function VideoArticleBanner({
  articles,
  title,
  buttonText,
  twTitle,
  twArticle,
  twArticleImg,
  twArticleImgIcon,
  twPrimaryArticle,
  twSecondaryArticle,
  twSecondaryArticleIconSize,
  twArticleTitle,
  twArticleCategory,
  twArticleButton,
  twArticleButtonBx,
  twArticleGrid,
  twContainer,
  twBackground,
}: VideoArticleBannerProps) {
  return articles ? (
    <div className={twBackground}>
      <div className={twContainer}>
        {title && <div className={twTitle}>{title}</div>}

        <div className={twArticleGrid}>
          {articles.map((article, index) => {
            return (
              <VideoArticle
                key={`article-${index}`}
                thumbnail={article.thumbnail}
                title={article.title}
                category={article.category}
                imageAlt={article.imageAlt}
                link={article.link}
                twImg={twArticleImg}
                twCategory={twArticleCategory}
                tw={`${twArticle} ${index === 0 ? twPrimaryArticle : ''}`}
                twIcon={`${twArticleImgIcon} ${
                  index === 0 ? twSecondaryArticleIconSize : ''
                }`}
                twTitle={`${twArticleTitle} ${
                  index === 1 ? twSecondaryArticle : ''
                }`}
              />
            );
          })}
        </div>

        {buttonText && (
          <div className={twArticleButtonBx}>
            <TopicButton
              topicName={buttonText}
              icon="icon icon-arrow-left"
              tw={twArticleButton}
              size={'28px'}
            />
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="text-center" data-testid="error-video-article-banner">
      No articles available
    </div>
  );
}

export default VideoArticleBanner;
