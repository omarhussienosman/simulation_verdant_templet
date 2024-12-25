import Image from "next/image";
import Link from "next/link";
import NavBar from "../NavBar"


export default function Header() {

    return (
        <div className="flex lg:flex-col flex-row lg:px-[70px] md:px-[60px] px-[40] pt-[20px] pb-[70px]">
            <NavBar />
            <svg preserveAspectRatio="none" width={350} height={80} data-bbox="0.162 0.829 436.269 75.155" viewBox="0.162 0.829 436.269 75.155" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" className="lg:order-2 order-1 w-[580px] h-[60px] lg:w-[300px]" aria-label="Homepage">
                <g>
                    <path d="M425.321 71.112a8.1 8.1 0 0 0 2.888-.538 12 12 0 0 0 2.79-1.468 20 20 0 0 0 2.594-2.104 29 29 0 0 0 2.349-2.545l.489.245-3.181 7.88-1.468.734q-.832.392-2.056.734-1.174.392-2.79.636-1.614.294-3.817.294-6.559 0-10.229-3.524-3.622-3.573-3.622-11.11V27.7l-8.223.294v-4.307q1.518.098 3.622.147 2.105.05 4.601.049a150 150 0 0 0-.196-6.118 74 74 0 0 0-.294-4.65q-.147-2.006-.391-3.377a29 29 0 0 0-.49-2.3v-.196h11.306v.196q-.293.93-.538 2.3t-.441 3.328a241 241 0 0 0-.293 4.65 269 269 0 0 0-.147 6.167q3.084-.049 6.02-.098a678 678 0 0 0 5.384-.196l4.111-.245q1.713-.147 2.251-.245l-.881 4.992a334 334 0 0 1-5.237-.147q-2.349-.098-5.383-.147-3.035-.049-6.265-.098v33.673q0 3.035.636 4.943.686 1.86 1.713 2.937 1.077 1.077 2.398 1.468 1.371.391 2.79.391Z" fill="#212516" data-color="1"></path>
                    <path d="M385.309 41.012q0-6.46-2.594-9.495c-2.594-3.035-4.046-3.035-6.95-3.035q-1.566 0-3.524.685-1.958.636-4.013 1.762a35 35 0 0 0-4.111 2.545 41 41 0 0 0-3.867 3.132l-.098 6.412v11.844q0 4.16.098 7.293.098 3.084.294 5.335a53 53 0 0 0 .44 3.769q.245 1.517.539 2.545V74h-11.306v-.196q.294-1.028.538-2.545.294-1.517.441-3.769.195-2.251.293-5.335.147-3.132.147-7.293V43.018q0-4.16-.147-7.244a100 100 0 0 0-.293-5.384q-.147-2.251-.441-3.769-.244-1.517-.538-2.545v-.196h11.306v.196q-.391 1.224-.637 3.132-.195 1.86-.44 4.894a82 82 0 0 1 4.307-3.328 39 39 0 0 1 4.845-2.937 28.4 28.4 0 0 1 5.09-2.104q2.594-.832 5.091-.832 3.817 0 6.46 1.322 2.692 1.321 4.356 3.475 1.713 2.153 2.447 4.943.783 2.74.783 5.579v16.641q0 4.16.098 7.293.098 3.084.294 5.335a53 53 0 0 0 .44 3.769q.245 1.517.539 2.545v.196H383.89v-.196q.294-1.028.538-2.545.294-1.517.441-3.769.195-2.251.293-5.335.147-3.132.147-7.293V41.01Z" fill="#212516" data-color="1"></path>
                    <path d="M296.843 59.562q0-3.867 1.567-6.705 1.614-2.838 4.258-4.845c2.644-2.007 3.768-2.415 6.02-3.23a42 42 0 0 1 6.998-1.958 55 55 0 0 1 7.146-.979 98 98 0 0 1 6.461-.343v-2.496q0-3.23-.832-5.579t-2.35-3.867q-1.517-1.566-3.67-2.3-2.105-.783-4.65-.783-1.762 0-3.475.294a20.3 20.3 0 0 0-3.573.979q-1.81.686-3.866 1.86-2.007 1.174-4.356 2.986l-.49-.294 3.328-6.901a22.4 22.4 0 0 1 3.182-1.175 27 27 0 0 1 3.181-.783 27 27 0 0 1 3.279-.392 42 42 0 0 1 3.573-.147q5.139 0 8.761 1.273 3.67 1.224 5.971 3.426a12.8 12.8 0 0 1 3.426 5.09q1.077 2.888 1.077 6.216v15.956q0 4.16.098 7.293.147 3.084.293 5.335.196 2.251.441 3.769a31 31 0 0 0 .587 2.545v.196h-10.816v-.196a9 9 0 0 0 .342-1.762q.147-.98.245-2.349a24 24 0 0 1-2.447 1.811q-1.37.93-3.181 1.713-1.763.734-3.965 1.175-2.153.489-4.747.489-8.516 0-13.166-3.964-4.65-4.014-4.65-11.355Zm32.45-14.243q-4.455.05-8.565.538-4.112.44-7.293 1.909-3.132 1.468-5.041 4.209-1.86 2.692-1.86 7.195 0 5.775 2.888 8.81t7.978 3.035q2.349 0 4.258-.636 1.958-.685 3.426-1.664 1.516-1.027 2.545-2.202 1.027-1.224 1.566-2.349a79 79 0 0 0 .098-4.111V45.321Z" fill="#212516" data-color="1"></path>
                    <path d="M263.488 23.001q2.006 0 4.013.343a26.4 26.4 0 0 1 3.915.979q1.91.636 3.622 1.566 1.713.93 3.084 2.105v-8.027q0-4.16-.098-7.244a99 99 0 0 0-.294-5.384 53 53 0 0 0-.44-3.769q-.245-1.517-.539-2.545V.829h11.306v.196a31 31 0 0 0-.587 2.545 54 54 0 0 0-.441 3.769 293 293 0 0 0-.293 5.384q-.099 3.084-.098 7.244v34.896q0 4.16.098 7.293.146 3.084.293 5.335.197 2.251.441 3.769a31 31 0 0 0 .587 2.545v.196h-10.816v-.196q.147-.391.244-1.126.099-.783.245-1.909-2.496 1.566-6.265 2.839t-8.76 1.273q-5.824 0-10.572-1.811t-8.125-5.188q-3.328-3.377-5.139-8.174-1.81-4.845-1.811-10.865 0-5.53 1.958-10.229 1.957-4.748 5.482-8.222 3.524-3.475 8.369-5.433t10.621-1.958Zm14.634 13.606q-1.959-5.14-5.629-7.586-3.621-2.447-8.173-2.447-3.818 0-7.048 1.371a15 15 0 0 0-5.531 3.866q-2.3 2.545-3.622 6.265-1.272 3.67-1.272 8.369 0 5.286 1.175 9.838t3.426 7.929q2.3 3.328 5.677 5.237 3.377 1.86 7.782 1.86 2.3 0 4.307-.538a19.5 19.5 0 0 0 3.671-1.37 18 18 0 0 0 2.936-1.811q1.273-1.028 2.105-2.007.098-2.105.147-4.797t.049-5.922z" fill="#212516" data-color="1"></path>
                    <path d="M202.822 43.019q0-4.16-.147-7.244a99 99 0 0 0-.294-5.384q-.147-2.251-.44-3.769-.245-1.517-.539-2.545v-.196h11.306v.196q-.391 1.125-.685 2.741-.245 1.615-.392 4.16a90 90 0 0 1 3.769-2.986 33.5 33.5 0 0 1 4.013-2.594 24.4 24.4 0 0 1 4.16-1.811 14.1 14.1 0 0 1 4.307-.685q1.322 0 2.301.147.978.098 1.762.343.783.196 1.419.49.636.245 1.224.489l-2.399 9.348-.832-.196q-.587-2.154-2.202-3.426-1.615-1.321-4.405-1.321-1.517 0-3.181.538-1.665.539-3.377 1.517a29 29 0 0 0-3.426 2.202 50 50 0 0 0-3.328 2.594 45 45 0 0 0-.098 3.083v16.151q0 4.16.098 7.293.098 3.084.293 5.335.196 2.251.441 3.769c.245 1.518.342 1.86.538 2.545v.196h-11.306v-.196q.293-1.028.539-2.545.293-1.517.44-3.769.196-2.251.294-5.335.147-3.132.147-7.293V43.017Z" fill="#212516" data-color="1"></path>
                    <path d="M171.424 74.881q-5.433 0-10.181-1.713t-8.271-4.992q-3.524-3.328-5.58-8.174-2.006-4.894-2.006-11.159 0-5.53 1.86-10.229 1.858-4.748 5.139-8.222a23.8 23.8 0 0 1 7.635-5.433q4.404-1.958 9.495-1.958 5.04 0 9.348 1.762 4.307 1.713 7.439 5.041 3.182 3.28 4.992 8.174 1.86 4.845 2.007 11.061a1275 1275 0 0 0-22.563-.196q-4.257 0-8.32.049-4.013.05-7.244.147.294 5.09 1.567 9.201 1.321 4.111 3.572 7.048 2.3 2.888 5.531 4.454 3.28 1.566 7.39 1.566 2.84 0 5.335-.636 2.545-.686 4.601-1.86a18.3 18.3 0 0 0 3.671-2.741 18.4 18.4 0 0 0 2.74-3.475l.588.294-3.622 8.712q-2.643 1.371-6.314 2.349-3.67.93-8.809.93m-6.51-29.856h9.789q4.943-.05 8.956-.196-.44-4.259-1.664-7.635-1.223-3.377-3.132-5.726t-4.503-3.622-5.726-1.273q-2.839 0-5.237 1.273-2.35 1.224-4.111 3.573-1.762 2.349-2.839 5.775-1.077 3.377-1.273 7.733 2.204.098 4.65.098z" fill="#212516" data-color="1"></path>
                    <path d="M92.404 3.815v.196q-.097.245-.147.734-.05.49-.049.881 0 1.517.392 3.377.44 1.81 1.615 4.552l21.682 48.894 20.947-48.503q.735-1.811 1.566-3.964t.832-4.356q0-.588-.097-.979-.099-.441-.196-.636v-.196h10.033v.196q-.93.93-2.251 3.328c-1.321 2.398-1.844 3.573-2.888 5.922l-28.044 62.256h-3.916L85.307 15.66a67 67 0 0 0-1.958-4.062 82 82 0 0 0-1.86-3.524 47 47 0 0 0-1.566-2.692q-.686-1.077-.93-1.37v-.196h13.41Z" fill="#212516" data-color="1"></path>
                    <path d="M8.727 12h26.48c2.17 0 3.622 2.232 2.743 4.215l-3.572 8.06a3 3 0 0 0 2.396 4.195l8.182.952a3 3 0 0 1 2.625 3.39l-4.35 31.503a3 3 0 0 1-.874 1.734l-9.278 9.079a3 3 0 0 1-2.133.856l-16.12-.186a3 3 0 0 1-2.048-.84L3.021 65.55a3 3 0 0 1-.912-1.976L.168 31.928a3 3 0 0 1 2.55-3.151l13.1-1.963" fill="#212516" data-color="1"></path>
                </g>
            </svg>
        </div>
    )
}