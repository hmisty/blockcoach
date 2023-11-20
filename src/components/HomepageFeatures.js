import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
/*  {
    title: '个人微信号',
    img: require('../../static/img/qr_wx.jpg').default,
    description: (
      <>
				微信号：jiaoliancoin。
      </>
    ),
  }, 
  {
    title: '微信公众号',
    img: require('../../static/img/qr_wxpublic.jpg').default,
    description: (
      <>
				公众号：刘教链/blockcoach。
      </>
    ),
  },
  {
    title: '知识星球',
    img: require('../../static/img/qr_vip.jpg').default,
    description: (
      <>
        <p>加入星球（请用微信扫码）。</p>
      </>
    ),
  }, */
];

//<Svg className={styles.featureSvg} alt={title} />
function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
				<img src={img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
