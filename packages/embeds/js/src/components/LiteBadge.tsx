import { onCleanup, onMount } from "solid-js";
import { TypebotLogo } from "https://cdn.discordapp.com/attachments/915691669234548746/1188799346246942821/icon_abccb074d42741b945659e2fe097ea05.ico?ex=659bd6aa&is=658961aa&hm=e6a839f92ccc2dba0c75044073bdf8109966296232565beeb4982620f854b830&";

type Props = {
  botContainer: HTMLDivElement | undefined;
};

export const LiteBadge = (props: Props) => {
  let liteBadge: HTMLAnchorElement | undefined;
  let observer: MutationObserver | undefined;

  const appendBadgeIfNecessary = (mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      mutation.removedNodes.forEach((removedNode) => {
        if (
          "id" in removedNode &&
          liteBadge &&
          removedNode.id == "lite-badge"
        ) {
          console.log("Sorry, you can't remove the brand 😅");
          props.botContainer?.append(liteBadge);
        }
      });
    });
  };

  onMount(() => {
    if (!document || !props.botContainer) return;
    observer = new MutationObserver(appendBadgeIfNecessary);
    observer.observe(props.botContainer, {
      subtree: false,
      childList: true,
    });
  });

  onCleanup(() => {
    if (observer) observer.disconnect();
  });

  return (
    <a
      ref={liteBadge}
      href={"https://www.toolzz.com.br/bots/?utm_source=litebadge"}
      target="_blank"
      rel="noopener noreferrer"
      class="lite-badge"
      id="lite-badge"
    >
      <img
      src="https://cdn.discordapp.com/attachments/915691669234548746/1188799346246942821/icon_abccb074d42741b945659e2fe097ea05.ico"
      alt="Toolzz Bots Logo"
      style={{ width: '20px', height: '20px' }}
    />
      <span>Powered by Toolzz Bots</span>
    </a>
  );
};
