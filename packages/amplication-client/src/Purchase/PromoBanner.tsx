import { useStiggContext } from "@stigg/react-sdk";
import { useEffect, useState } from "react";
import "./PromoBanner.scss";

const CLASS_NAME = "promo-banner";

export const PromoBanner = () => {
  const [isFreePlan, setFreePlan] = useState(false);
<<<<<<< HEAD

  const { stigg, isInitialized } = useStiggContext();
=======
  const [backgroundImage, setBackgroundImage] = useState(null);

  const { stigg, isInitialized } = useStiggContext();
  const imgSrc =
    "https://static-assets.amplication.com/marketing/banners/promo-banner.png";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9

  useEffect(() => {
    async function getCustomer() {
      if (isInitialized) {
        const customer = await stigg.getCustomer();
        const subs = customer.getActiveSubscriptions();
        setFreePlan(
          subs.some((sub) => sub.plan.id === "plan-amplication-free")
        );
      }
    }
    getCustomer();
  }, [isInitialized]);

<<<<<<< HEAD
  return (
    isFreePlan && (
      <div className={CLASS_NAME}>
        <div className={`${CLASS_NAME}__content`}>
          <div className={`${CLASS_NAME}__content__label`}>
            <div className={`${CLASS_NAME}__content__label__text`}>
              Limited time offer
            </div>
          </div>
          <div className={`${CLASS_NAME}__content__title`}>
            Thank you for being an early adopter
          </div>
          <div className={`${CLASS_NAME}__content__description`}>
            As a token of appreciation we offer you the first 2 months of our
            Pro plan
          </div>
          <div className={`${CLASS_NAME}__content__free`}>FOR FREE</div>
          <div className={`${CLASS_NAME}__content__coupon`}>
            <div className={`${CLASS_NAME}__content__coupon__label`}>
              Use coupon code:
            </div>
            <div className={`${CLASS_NAME}__content__coupon__code`}>EARLY2</div>
          </div>
        </div>
      </div>
=======
  useEffect(() => {
    const bannerBackgroundImage = new Image();
    bannerBackgroundImage.src = imgSrc;

    bannerBackgroundImage.onload = () => {
      if (
        bannerBackgroundImage.width !== 1 ||
        bannerBackgroundImage.height !== 1
      ) {
        setBackgroundImage(imgSrc);
      } else {
        setBackgroundImage(null);
      }
    };
  }, [imgSrc]);

  return (
    isFreePlan &&
    backgroundImage && (
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className={CLASS_NAME}
      />
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    )
  );
};
