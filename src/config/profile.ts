import type { IconName } from '@components/ui/icon';

export type SocialLink = {
    id: string;
    icon: IconName;
    label: string;
    handle: string;
    url: string;
};

/**
 * Who the site is about. Everything personal (handles, Matrix ID, location) lives
 * here so the hero, dock and contact section stay in sync.
 */
export const profile = {
    name: 'Freezlex',
    monogram: 'F',
    status: 'Tinkering',
    location: 'Alsace',
    // TODO: replace with your real Matrix ID, the contact section links to it.
    matrix: '@freezlex:polarys.im',
    socials: [
        {
            id: 'github',
            icon: 'github',
            label: 'GitHub',
            handle: '@Freezlex',
            url: 'https://github.com/Freezlex',
      },
      {
          id: 'matrix',
          icon: 'matrix',
          label: 'Matrix',
          handle: '@freezlex:polarys.im',
          url: 'https://matrix.to/#/@freezlex:polarys.im',
      },
      {
          id: 'twitch',
          icon: 'twitch',
          label: 'Twitch',
          handle: 'Freezlex_',
          url: 'https://twitch.tv/freezlex_',
      },
        // Add more as needed, e.g.
        // { id: 'twitter', icon: 'twitter', label: 'Twitter', handle: '@you', url: 'https://twitter.com/you' },
    ] as SocialLink[],
};

export const github = profile.socials.find((social) => social.id === 'github');

/** Universal link that opens a chat with `matrixId` in the visitor's Matrix client. */
export const matrixUrl = (matrixId: string) => `https://matrix.to/#/${encodeURIComponent(matrixId)}`;
