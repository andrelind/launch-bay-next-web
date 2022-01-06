import Image from 'next/image';

export const Blog = () => {
  return (
    <div className="bg-dark overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-lbnred sm:text-4xl">
              Launch Bay Next
            </h3>

            <p className="text-md font-medium text-gray-500">
              So, during the spring of 2021 I came to a conclusion. The by now
              pretty old code base of LBN wasn't really viable to continue
              working on. Here's just a short history summary of LBN and why I
              came to the conclusion to throw it all out the window...
            </p>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <Image
                className="rounded-lg shadow-lg object-cover object-center"
                width={1133}
                height={744}
                src={'/static/images/1_3.png'}
              />
              <Image
                className="rounded-lg shadow-lg object-cover object-center"
                width={1133}
                height={744}
                src={'/static/images/1_2.png'}
              />
              <Image
                className="rounded-lg shadow-lg object-cover object-center"
                width={1133}
                height={744}
                src={'/static/images/1_4.png'}
              />
              <Image
                className="rounded-lg shadow-lg object-cover object-center"
                width={1133}
                height={744}
                src={'/static/images/1_1.png'}
              />
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="prose prose-lbnred text-gray-500 mx-auto lg:max-w-none text-sm lg:row-start-1 lg:col-start-1">
              <h3 className="text-md font-medium text-lbnred">X-Wing 1.0</h3>
            </div>

            <div className="mt-5 prose prose-lbnred text-gray-500 mx-auto lg:max-w-none text-sm lg:row-start-1 lg:col-start-1">
              <p>
                The main part of LBN was really based on a tech evaluation
                project by my employer at the time. I just figured I could do
                some cool stuff for X-Wing while testing the waters. When the
                evaluation was over I got the approval to use the code base to
                release the app to the public.
              </p>
              <p>
                This also meant I could never release it as an open source
                project 😭
              </p>
              <p>
                The app was released (I think) by wave 8 or 9 of X-Wing 1.0, and
                I continually improved and built new features. Then the
                announcement of X-Wing 2.0 came and they also announced "THE
                APP"!
              </p>
              <p>
                I was really looking forward to the app so that I could focus on
                just playing the game and having fun 😄 <br />
                So I actually had no thoughts on "upgrading" Launch Bay for 2.0
                in any way, shape or form.
                <br />
                Then during the summer FFG released some points but still no app
                (it would be released when 2.0 would officially launch during
                September)
                <br />
                So I went to town on the old code base, ripping out most
                features just to have a simple app to list build until the FFG
                app was released.
                <br />
                And once I was functional enough I just released it as Launch
                Bay Next, so my local community could use it 🙂
              </p>
              <p>
                Then came the FFG app...
                <br />
                We all know what that means so no need to bash on it,but all in
                all, I just continued working on LBN, rebuilding features again
                for the community
              </p>
              <h3 className="text-lbnred">A new dawn</h3>
              <p>
                Fast forward a few years, and by now X-Wing 2.0 has been out for
                quite a while (with 2.5 is even on the verge of being released.)
                <br />
                LBN itself was getting more and more tedious to maintain in
                itself with no way of upgrading some packages and getting them
                to work with newer versions of iOS/Android.
              </p>
              <p>
                And now I also had a web version to sync every single release
                with, so during the spring I just came to the conclusion that
                starting from a clean slate would be a better idea than to
                continue to battle with the old code base. The initial idea was
                that core functionality should be shared between the platforms,
                freeing up precious time to do cool stuff instead 😅
              </p>
              <p>
                So I began to setup a new app from scratch, using modern
                frameworks, standard components of both iOS and Android, a
                unified UI library etc. etc. in order to build a better and more
                easily maintainable application.
                <br />
              </p>
              <p>
                So about 8 months later the app was finally released to the
                public. A complete rewrite of the app from scratch! And also, a
                few new features and long sought after tweaks! 😄 <br />
                So here's a short list of the new stuff
              </p>
              <ul role="list">
                <li>Card images everywhere</li>
                <li>iPad support!</li>
                <li>Drag to reorder lists and pilots</li>
                <li>Upgrades showing requirements</li>
                <li>Obstacle support</li>
                <li>Flexible tag support</li>
                <li>More performance (especially on Android)</li>
                <li>
                  A unified core library that syncs all content between app and
                  web version
                </li>
                <li>Will be open sourced!</li>
              </ul>
              <p>
                Another big thing that is not showing anywhere is that a
                completely new backend (API) was built also during this time,
                giving me a better way to support the app and also the community
                going forward.
              </p>
              <p>
                So now that it's been out for a few weeks and is mostly stable I
                can finally start working on the final missing pieces/features
                and be ready for whatever AMG pulls out of their magic hat by
                the end of January.
              </p>
              <p>
                Thanks for everything and best regards, <br />
                André
              </p>
              <h3 className="text-lbnred">Like Launch Bay Next?</h3>
              <p>
                Please consider donating, either via{' '}
                <a
                  className="text-yellow-500"
                  href="https://www.patreon.com/andrelind"
                >
                  Patreon
                </a>{' '}
                or{' '}
                <a
                  className="text-yellow-500"
                  href="https://paypal.me/launchbaynext"
                >
                  PayPal
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
