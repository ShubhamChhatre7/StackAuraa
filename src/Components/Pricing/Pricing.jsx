import React from 'react';
import { Code2, Globe, Cpu, Wrench } from 'lucide-react';
import './Pricing.css';
import { Link } from 'react-scroll';

const PricingCard = ({ plan }) => (
  <div className={`pricing-plan ${plan.featured ? 'featured-plan' : ''}`}>
    <div className="plan-header">
      <div className="plan-icon">
        <plan.icon size={24} />
      </div>
      <h3>{plan.name}</h3>
      <div className="plan-price">
        <span className="currency">$</span>
        <span className="amount">{plan.price}</span>
        <span className="duration">{plan.duration}</span>
      </div>
      <p className="delivery-time">{plan.deliveryTime}</p>
    </div>
    
    <ul className="features-list">
      {plan.features.map((feature, index) => (
        <li key={index}>
          <span className="check-icon">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    
    <Link to='contact' 
                smooth={true}
                duration={700}
                spy={true}
                offset={-50} className={`plan-button ${plan.featured ? 'featured-button' : ''}`}>
      {plan.buttonText}
    </Link>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      name: "Silver Plan",
      price: "500 - 1,500",
      duration: "",
      deliveryTime: "1-2 weeks",
      icon: Code2,
      features: [
        "Up to 5 pages",
        "Simple, responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "Mobile-friendly layout"
      ],
      buttonText: "Get Silver Now"
    },
    {
      name: "Gold Plan",
      price: "2,000 - 5,000",
      duration: "",
      deliveryTime: "3-5 weeks",
      icon: Globe,
      featured: true,
      features: [
        "Up to 10 pages",
        "Advanced design options",
        "E-commerce integration",
        "CMS implementation",
        "Enhanced SEO optimization"
      ],
      buttonText: "Get Gold Now"
    },
    {
      name: "Platinum Plan",
      price: "6,000+",
      duration: "",
      deliveryTime: "6-10 weeks",
      icon: Cpu,
      features: [
        "Unlimited pages",
        "Custom design & branding",
        "Complex functionality",
        "Third-party integrations",
        "Advanced security features"
      ],
      buttonText: "Get Platinum Now"
    },
    {
      name: "Maintenance Plan",
      price: "Based on your plans",
      duration: "",
      deliveryTime: "Ongoing support",
      icon: Wrench,
      features: [
        "Basic:$50/mo - Updates & security",
        "Standard:$150/mo - Content & SEO",
        "Premium:$400/mo - analytics",
        "24/7 support (Premium)",
        "Monthly performance reports"
      ],
      buttonText: "Get Maintenance Now"
    }
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Affordable Plans for Every Business</h1>
        <p>Choose the right plan to grow your online presence</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>

      <Link to='contact' 
                smooth={true}
                duration={700}
                spy={true}
                offset={-50}  className="pricing-cta">
        <button className="cta-button">Get Started</button>
      </Link>
    </div>
  );
};

export default Pricing;