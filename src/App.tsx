import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Camera,
  CircleHelp,
  Facebook,
  Gem,
  Heart,
  Instagram,
  Mail,
  Menu,
  Mic,
  Play,
  Search,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Star,
  Truck,
  UserRound,
  X,
  Youtube,
} from 'lucide-react';

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  badge?: string;
  category: string;
};

type HeroSlide = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  button: string;
};

const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'The new festive edit',
    title: 'Adornment for\nyour saree look.',
    text: 'Graceful pieces, made for the moments you will remember.',
    image: 'https://images.pexels.com/photos/5475948/pexels-photo-5475948.jpeg?auto=compress&cs=tinysrgb&w=1600',
    button: 'Explore earrings',
  },
  {
    eyebrow: 'Made to be remembered',
    title: 'A little more\nlight in every look.',
    text: 'Everyday diamonds with an unmistakable Riddhi Siddhi glow.',
    image: 'https://images.pexels.com/photos/14950241/pexels-photo-14950241.jpeg?auto=compress&cs=tinysrgb&w=1600',
    button: 'Shop diamonds',
  },
  {
    eyebrow: 'Bridal jewellery',
    title: 'Your forever\nbegins here.',
    text: 'Heirloom-worthy designs for the day and all the days after.',
    image: 'https://images.pexels.com/photos/14033026/pexels-photo-14033026.jpeg?auto=compress&cs=tinysrgb&w=1600',
    button: 'Discover bridal',
  },
];

const categories = [
  { name: 'Earrings', image: 'https://images.pexels.com/photos/10976654/pexels-photo-10976654.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Chain Pendant', image: 'https://images.pexels.com/photos/29502931/pexels-photo-29502931.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Handbags', image: 'https://images.pexels.com/photos/29502496/pexels-photo-29502496.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Bangles', image: 'https://images.pexels.com/photos/29502932/pexels-photo-29502932.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Finger Rings', image: 'https://images.pexels.com/photos/29502436/pexels-photo-29502436.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Mangalsutra', image: 'https://images.pexels.com/photos/29502923/pexels-photo-29502923.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Necklaces', image: 'https://images.pexels.com/photos/8891953/pexels-photo-8891953.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const products: Product[] = [
  { id: 1, name: 'Silver Plated AD Cocktail Necklace Set', image: 'https://images.pexels.com/photos/8891961/pexels-photo-8891961.jpeg?auto=compress&cs=tinysrgb&w=900', price: 233, originalPrice: 424, rating: 4.8, badge: 'Special Deal', category: 'Necklace Set' },
  { id: 2, name: 'Rose Gold Polish with Stonework', image: 'https://images.pexels.com/photos/29569499/pexels-photo-29569499.jpeg?auto=compress&cs=tinysrgb&w=900', price: 232, originalPrice: 464, rating: 4.7, badge: 'Special Deal', category: 'Necklace Set' },
  { id: 3, name: 'Exquisite Kundan and Imitation Pearl Set', image: 'https://images.pexels.com/photos/29502923/pexels-photo-29502923.jpeg?auto=compress&cs=tinysrgb&w=900', price: 205, originalPrice: 324, rating: 4.9, badge: 'New Launch', category: 'Necklace Set' },
  { id: 4, name: 'Rose Gold Polish Zircon AD Choker', image: 'https://images.pexels.com/photos/29502932/pexels-photo-29502932.jpeg?auto=compress&cs=tinysrgb&w=900', price: 230, originalPrice: 464, rating: 4.6, badge: 'Special Deal', category: 'Necklace Set' },
  { id: 5, name: 'Pearl Drop Bridal Necklace', image: 'https://images.pexels.com/photos/36854166/pexels-photo-36854166.jpeg?auto=compress&cs=tinysrgb&w=900', price: 349, originalPrice: 699, rating: 4.8, badge: 'Best Seller', category: 'Necklace Set' },
  { id: 6, name: 'Classic Gold Layered Pendant', image: 'https://images.pexels.com/photos/29502496/pexels-photo-29502496.jpeg?auto=compress&cs=tinysrgb&w=900', price: 289, originalPrice: 575, rating: 4.5, category: 'Necklace Set' },
  { id: 7, name: 'Polki Floral Statement Set', image: 'https://images.pexels.com/photos/13042449/pexels-photo-13042449.jpeg?auto=compress&cs=tinysrgb&w=900', price: 399, originalPrice: 799, rating: 4.9, badge: 'Limited Edition', category: 'Necklace Set' },
  { id: 8, name: 'Minimal Pearl Everyday Set', image: 'https://images.pexels.com/photos/29502931/pexels-photo-29502931.jpeg?auto=compress&cs=tinysrgb&w=900', price: 185, originalPrice: 359, rating: 4.6, category: 'Necklace Set' },
];

const reels = [
  { image: 'https://images.pexels.com/photos/30929039/pexels-photo-30929039.jpeg?auto=compress&cs=tinysrgb&w=700', views: '2.4k' },
  { image: 'https://images.pexels.com/photos/5475948/pexels-photo-5475948.jpeg?auto=compress&cs=tinysrgb&w=700', views: '1.8k' },
  { image: 'https://images.pexels.com/photos/13042449/pexels-photo-13042449.jpeg?auto=compress&cs=tinysrgb&w=700', views: '3.1k' },
  { image: 'https://images.pexels.com/photos/14950241/pexels-photo-14950241.jpeg?auto=compress&cs=tinysrgb&w=700', views: '4.2k' },
  { image: 'https://images.pexels.com/photos/14033026/pexels-photo-14033026.jpeg?auto=compress&cs=tinysrgb&w=700', views: '920' },
];

function App() {
  const [activeView, setActiveView] = useState<'home' | 'catalog'>('home');
  const [slide, setSlide] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('Latest');
  const [liked, setLiked] = useState<number[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (activeView !== 'home') return;
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % heroSlides.length), 5500);
    return () => window.clearInterval(timer);
  }, [activeView]);

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    return [...filtered].sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price;
      if (sort === 'Price: High to Low') return b.price - a.price;
      if (sort === 'Popularity') return b.rating - a.rating;
      return b.id - a.id;
    });
  }, [query, sort]);

  const openCatalog = () => {
    setActiveView('catalog');
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLike = (id: number) => {
    setLiked((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  const subscribe = () => {
    if (email.trim()) setSubscribed(true);
  };

  return (
    <div className="site-shell">
      <div className="announcement">Complimentary shipping on orders above ₹999 <span>•</span> Easy 7-day returns</div>
      <header className="header">
        <div className="header-top">
          <button className="mobile-menu-button" aria-label="Open menu" onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X size={21} /> : <Menu size={21} />}</button>
          <button className="brand" onClick={() => setActiveView('home')} aria-label="Riddhi Siddhi Jewels home">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Riddhi Siddhi Jewels" />
          </button>
          <div className="search-wrap">
            <Search size={17} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} onFocus={() => activeView === 'home' && openCatalog()} placeholder="Search for gold jewellery, diamond jewellery and more..." aria-label="Search jewellery" />
            <button className="search-tool" aria-label="Search by image"><Camera size={17} /></button>
            <button className="search-tool" aria-label="Search by voice"><Mic size={17} /></button>
            <span className="search-shortcut">⌘ K</span>
          </div>
          <div className="header-actions">
            <button aria-label="Account"><UserRound size={19} /></button>
            <button aria-label="Wishlist"><Heart size={19} /></button>
            <button aria-label="Shopping bag" className="cart-button" onClick={() => openCatalog()}><ShoppingBag size={20} /><b>{cartCount}</b></button>
          </div>
        </div>
        <nav className={`nav ${mobileMenu ? 'nav-open' : ''}`}>
          {['Gold', 'Diamond', 'Earrings', 'Rings', 'Daily Wear', 'Collections', 'Wedding', 'Gifting'].map((item) => <button key={item} onClick={openCatalog}>{item}</button>)}
          <button onClick={openCatalog}>More <ChevronDown size={14} /></button>
        </nav>
      </header>

      {activeView === 'home' ? (
        <main>
          <section className="hero">
            <div className="hero-image" style={{ backgroundImage: `url(${heroSlides[slide].image})` }} />
            <div className="hero-tint" />
            <button className="hero-arrow left" onClick={() => setSlide((slide - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous slide"><ChevronLeft /></button>
            <div className="hero-content">
              <p className="eyebrow">{heroSlides[slide].eyebrow}</p>
              <h1>{heroSlides[slide].title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h1>
              <p>{heroSlides[slide].text}</p>
              <button className="button dark-button" onClick={openCatalog}>{heroSlides[slide].button} <ArrowRight size={16} /></button>
            </div>
            <button className="hero-arrow right" onClick={() => setSlide((slide + 1) % heroSlides.length)} aria-label="Next slide"><ChevronRight /></button>
            <div className="hero-dots">{heroSlides.map((item, index) => <button key={item.title} className={index === slide ? 'active' : ''} onClick={() => setSlide(index)} aria-label={`Go to slide ${index + 1}`} />)}</div>
          </section>

          <section className="trust-bar">
            <div><Truck size={21} /><span><strong>Free shipping</strong><small>On orders above ₹999</small></span></div>
            <div><Sparkles size={21} /><span><strong>Certified jewellery</strong><small>Quality you can trust</small></span></div>
            <div><CircleHelp size={21} /><span><strong>Expert assistance</strong><small>Here when you need us</small></span></div>
          </section>

          <section className="section collection-section">
            <div className="section-heading"><p className="eyebrow">Find your signature</p><h2>Discover our collections</h2><span className="heading-line" /></div>
            <div className="category-grid">{categories.map((category) => <button className="category-card" key={category.name} onClick={openCatalog}><span className="category-image"><img src={category.image} alt={category.name} /></span><span>{category.name}</span><small>Explore <ArrowRight size={12} /></small></button>)}</div>
          </section>

          <section className="section story-section">
            <div className="story-copy"><p className="eyebrow">The Riddhi Siddhi edit</p><h2>Little luxuries.<br /><em>Big feelings.</em></h2><p>Jewellery is never just an accessory. It is the sparkle in a first hello, the keepsake from a celebration, and the quiet reminder of how far you have come.</p><button className="text-button" onClick={openCatalog}>Shop the edit <ArrowRight size={16} /></button></div>
            <div className="story-image"><img src="https://images.pexels.com/photos/13042449/pexels-photo-13042449.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Woman wearing a delicate jewellery set" /><div className="story-stamp"><Gem size={24} /><span>Made for<br />your moments</span></div></div>
          </section>

          <section className="section trending-section"><div className="section-heading"><p className="eyebrow">Seen in the wild</p><h2>Trending looks</h2><span className="heading-line" /></div><div className="reel-row">{reels.map((reel) => <button className="reel-card" key={reel.image}><img src={reel.image} alt="Trending jewellery look" /><span className="reel-overlay"><span><Play size={13} fill="currentColor" /> {reel.views}</span></span></button>)}</div></section>
        </main>
      ) : (
        <main className="catalog-page">
          <div className="catalog-heading"><div><button className="back-link" onClick={() => setActiveView('home')}><ChevronLeft size={16} /> Home</button><p className="eyebrow">Curated for you</p><h1>Necklace Sets</h1><p>Explore designs that make every occasion feel a little more special.</p></div><div className="catalog-toolbar"><span>{visibleProducts.length} pieces</span><label>Sort by <select value={sort} onChange={(event) => setSort(event.target.value)}><option>Latest</option><option>Popularity</option><option>Price: Low to High</option><option>Price: High to Low</option></select><ChevronDown size={15} /></label></div></div>
          <div className="catalog-layout"><aside className="filters"><div className="filter-title"><span>Filters</span><SlidersHorizontal size={18} /></div><div className="filter-group"><h3>Price range</h3><div className="range-line"><span /><i /><span /></div><div className="range-labels"><span>₹0</span><span>₹3,449</span></div></div><FilterGroup title="Base metal" options={['Brass', 'Oxidised Silver', 'Stone', 'Merable']} /><FilterGroup title="Polish" options={['Gold Polish', 'Rose Gold Polish', 'Rhodium Silver']} /></aside><section className="product-area"><div className="mobile-filter"><button><SlidersHorizontal size={16} /> Filters</button><span>Showing {visibleProducts.length} of 28</span></div>{visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} isLiked={liked.includes(product.id)} onLike={() => toggleLike(product.id)} onAdd={() => setCartCount((count) => count + 1)} />)}</div> : <div className="empty-state"><Search size={28} /><h2>No pieces found</h2><p>Try a different search term.</p></div>}</section></div>
        </main>
      )}

      <footer className="footer"><div className="footer-top"><div className="footer-brand"><span className="brand-mark"><Gem size={30} strokeWidth={1.3} /></span><h2>RIDDHI SIDDHI</h2><p>Jewels that tell your story.</p><div className="socials"><button aria-label="Facebook"><Facebook size={16} /></button><button aria-label="Instagram"><Instagram size={16} /></button><button aria-label="Youtube"><Youtube size={17} /></button></div></div><div><h3>Associate with us</h3><a>Contact us</a><a>Our stores</a><a>Corporate gifting</a><a>Careers</a><a>Blog</a></div><div><h3>Policy matters</h3><a>Terms of use</a><a>Privacy policy</a><a>Shipping policy</a><a>Returns & exchange</a><a>Grievance</a></div><div className="footer-contact"><h3>Stay in the know</h3><p>Get first access to new drops, private events and special stories.</p>{subscribed ? <div className="subscribed">You are on the list. Thank you.</div> : <div className="subscribe"><Mail size={16} /><input placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} /><button onClick={subscribe} aria-label="Subscribe"><ArrowRight size={16} /></button></div>}</div></div><div className="footer-bottom"><span>© 2024 Riddhi Siddhi Jewels</span><span>Designed for the moments that matter.</span><span>Made with care in India</span></div></footer>
    </div>
  );
}

function FilterGroup({ title, options }: { title: string; options: string[] }) {
  return <div className="filter-group"><h3>{title}</h3>{options.map((option) => <label className="check-option" key={option}><input type="checkbox" /> <span>{option}</span></label>)}</div>;
}

function ProductCard({ product, isLiked, onLike, onAdd }: { product: Product; isLiked: boolean; onLike: () => void; onAdd: () => void }) {
  return <article className="product-card"><div className="product-image"><img src={product.image} alt={product.name} /><div className={`product-badge ${product.badge === 'New Launch' ? 'lavender' : ''}`}>{product.badge || 'Curated pick'}</div><button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={onLike} aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}><Heart size={17} fill={isLiked ? 'currentColor' : 'none'} /></button><button className="quick-add" onClick={onAdd}><ShoppingCart size={15} /> Add to bag</button></div><div className="product-info"><h3>{product.name}</h3><div className="rating"><span>{product.rating}</span> <Star size={13} fill="currentColor" /> <span className="rating-count">(42)</span></div><div className="price-row"><strong>₹{product.price}</strong><del>₹{product.originalPrice}</del><span>{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span></div></div></article>;
}

export default App;
