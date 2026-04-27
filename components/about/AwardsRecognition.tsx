'use client';

export default function AwardsSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-black overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[300px] md:h-[400px] bg-red-700/20 blur-[140px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        {/* heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 md:mb-6">
          <span className="text-white">Awards &</span>{' '}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Recognition
          </span>
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10 md:mb-16 text-sm sm:text-base">
          At CodeXpace, recognition is rooted in the trust of our global clients and the consistent impact of our technology solutions. Our commitment to innovation, engineering excellence, and measurable client success continues to be reflected across engagements worldwide.
        </p>

        {/* cards */}
        <div className="grid grid-cols-1 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1 min-[1025px]:grid-cols-3 gap-6 md:gap-8">

          {/* card 1 */}
          <div className="rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center border border-red-400">
              <svg xmlns="http://www.w3.org/2000/svg" width={28} viewBox="0 0 640 640"><path fill="#fff" d="M582.8 305L532.7 218.2C533.8 216.1 534.6 213.6 534.6 211C534.6 203 527.9 196.3 519.9 196L464.4 100.1C464.9 98.5 465.5 96.9 465.5 95.3C465.5 86.7 458.5 80 450.2 80C445.4 80 441.4 82.1 438.4 85.6L331.8 85.6C329.1 82.1 325.1 80 320.3 80C315.5 80 311.5 82.1 308.8 85.6L202.7 85.6C199.8 82.1 195.7 80 190.9 80C182.6 80 175.6 86.7 175.6 95.3C175.6 96.9 176.1 98.8 176.7 100.1L120.7 197.3C115.3 199.7 111.6 204.8 111.6 211C111.6 211.5 111.9 212.1 111.9 212.6L58.6 304.7C51.4 306 46 312.2 46 319.7C46 326.9 51.1 333.1 58.1 334.7L113.3 430.1C112.8 431.7 112.5 433 112.5 434.9C112.5 442.1 117.6 448.3 124.6 449.6L176.3 539.3C175.8 540.9 175.2 542.8 175.2 544.7C175.2 553.3 182.2 560 190.5 560C195.3 560 199.3 557.9 202 554.6L308.9 554.6C311.6 557.8 315.9 560 320.4 560C324.9 560 329.2 557.9 331.9 554.6L439 554.6C441.7 557.5 445.7 559.4 450 559.4C458.6 559.4 465.3 552.4 465.3 544.1C465.3 542.5 465 541.2 464.5 539.8L516.2 449.5C523.2 448.2 528.3 442 528.3 434.8C528.3 433.2 528 431.6 527.5 430L582.4 334.6C589.4 333.3 594.7 327.1 594.7 319.6C594.7 312.4 589.6 306.2 582.9 304.9zM185.8 514.7L142.1 438.9L185.8 438.9L185.8 514.7zM185.8 430.9L142.1 430.9C141.8 429.8 141.3 428.8 140.8 427.7L185.8 380.3L185.8 430.9zM185.8 368.5L135.4 421.8C134.1 421.3 132.7 420.5 131.4 420.2L75.7 323.8C76.2 322.5 76.2 321.1 76.2 319.8C76.2 318.5 76.2 317.4 75.9 316.3L127.9 226.3C130.6 226 133.3 225.2 135.7 223.6L185.8 275.6L185.8 368.5zM185.8 266.2L140 218.8C141.3 216.7 142.1 214 142.1 211C142.1 210.7 141.8 210.2 141.8 209.9L185.7 194.1L185.7 266.2zM185.8 185.6L142.1 201.4L185.8 125.9L185.8 185.6zM512.3 224.7L513.1 226L477.7 393.1L413.9 325.9L511.9 224.4L512.2 224.7zM324.1 419.1L335.6 430.9L312.8 430.9L324.1 419.1zM323.8 407.8L240.5 322.4L320.1 238L403.1 325.6L323.8 407.8zM329.2 413.7L408.5 331.5L476 402.8L470.1 430.9L346.1 430.9L329.2 413.8zM442.7 108.4C443.8 108.9 444.8 109.5 446.2 109.7L504.1 210.4L504.1 210.9C504.1 213.8 504.9 216.5 506.2 218.7L408.7 319.9L325.7 232.3L442.8 108.3zM433.6 106.3L320 226.6L262.9 166.3L429.2 106.3L433.5 106.3zM310.1 106.3C312.8 109 316.3 110.6 320.3 110.6C324.3 110.6 327.8 109 330.5 106.3L405.5 106.3L257.1 159.9L206.2 106.3L310.1 106.3zM193.9 111.9L195 109.8C195.9 109.6 196.8 109.3 197.7 109L248.9 162.8L194 182.6L194 111.9zM193.9 191.2L254.7 169.2L314.4 232.4L234.8 316.5L193.8 274.4L193.8 191.1zM193.9 283.9L230.3 321.7L193.9 360L193.9 283.9zM193.9 371.8L236 327.3L318.8 413.3L301.7 431L194 431L194 371.8zM200.9 533.9C199.3 532.3 197.4 531.2 195 530.4L193.9 528.8L193.9 439.1L293.8 439.1L202.2 533.9L200.9 533.9zM330.8 533.9C328.1 531.5 324.4 529.6 320.4 529.6C316.4 529.6 312.6 531.5 310 533.9L213.6 533.9L305.2 439.1L343.5 439.1L435.1 533.9L330.9 533.9zM450.8 522.1L446.5 529.6C445.2 529.9 444.1 530.4 443 530.9L353.8 439L468.2 439L450.8 522zM463.7 499.9L476.6 439.1L498.6 439.1L463.8 499.9zM498.5 431.1L478.1 431.1L482.7 409.9L499.8 428.1C499.3 428.9 498.7 430 498.5 431zM564.7 323.7L509.3 420.4C508 420.9 506.6 421.5 505.3 422.3L484.7 400.3L519.3 236.4L565.1 315.7C564.8 317 564.3 318.4 564.3 320C564.3 321.3 564.6 322.4 564.8 323.7z" /></svg>
            </div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Leading Software Development Company – 2025
            </h3>
            <p className="text-gray-400 text-sm">
              Honored by leading tech directories for a proven track record of delivering innovative, high-quality software solutions that enable business growth and digital transformation.
            </p>
          </div>

          {/* card 2 */}
          <div className="rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center border border-red-400">
              <img src="/clutch.png" alt="Clutch" width={20} />
            </div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Clutch Leader in Advanced Software Development
            </h3>
            <p className="text-gray-400 text-sm">
              Recognized on Clutch for engineering secure, scalable, and high-impact solutions across AI, blockchain, cloud platforms, and enterprise-grade applications.
            </p>
          </div>

          {/* card 3 */}
          <div className="rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center border border-red-400">
              <svg xmlns="http://www.w3.org/2000/svg" width={28} viewBox="0 0 640 640"><path fill="#fff" d="M300.9 149.2L184.3 278.8C179.7 283.9 179.9 291.8 184.8 296.7C215.3 327.2 264.8 327.2 295.3 296.7L327.1 264.9C331.3 260.7 336.6 258.4 342 258C348.8 257.4 355.8 259.7 361 264.9L537.6 440L608 384L608 96L496 160L472.2 144.1C456.4 133.6 437.9 128 418.9 128L348.5 128C347.4 128 346.2 128 345.1 128.1C328.2 129 312.3 136.6 300.9 149.2zM148.6 246.7L255.4 128L215.8 128C190.3 128 165.9 138.1 147.9 156.1L144 160L32 96L32 384L188.4 514.3C211.4 533.5 240.4 544 270.3 544L286 544L279 537C269.6 527.6 269.6 512.4 279 503.1C288.4 493.8 303.6 493.7 312.9 503.1L353.9 544.1L362.9 544.1C382 544.1 400.7 539.8 417.7 531.8L391 505C381.6 495.6 381.6 480.4 391 471.1C400.4 461.8 415.6 461.7 424.9 471.1L456.9 503.1L474.4 485.6C483.3 476.7 485.9 463.8 482 452.5L344.1 315.7L329.2 330.6C279.9 379.9 200.1 379.9 150.8 330.6C127.8 307.6 126.9 270.7 148.6 246.6z" /></svg>
            </div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Trusted by Global Clients
            </h3>
            <p className="text-gray-400 text-sm">
              Proven across global engagements, supporting enterprises with reliable engineering teams that accelerate product delivery and scale operations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}