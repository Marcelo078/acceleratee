import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles, Zap, Shield, Star, ArrowRight } from "lucide-react";
import mitolynProduct from "@/assets/mitolyn-product.webp";
import mitolynBottle from "@/assets/mitolyn-bottle.webp";
import mitolynSingle from "@/assets/mitolyn-single.webp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Mitolyn Weight Loss Support",
      "image": [mitolynProduct, mitolynBottle, mitolynSingle],
      "description": "Mitolyn weight loss supplement is an advanced mitochondrial formula designed to support natural fat burning and sustained energy through cellular optimization.",
      "brand": {
        "@type": "Brand",
        "name": "Mitolyn"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "2847"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://d68f8biqy-p5-y57wi-dbh9y4i.hop.clickbank.net",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleCTAClick = () => {
    window.open('https://d68f8biqy-p5-y57wi-dbh9y4i.hop.clickbank.net', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                <Sparkles className="w-4 h-4 mr-2" />
                Advanced Mitochondrial Formula
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform Your Body with{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Mitolyn
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The revolutionary Mitolyn weight loss supplement targets your mitochondria—the powerhouse of your cells—to naturally boost metabolism and energy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  onClick={handleCTAClick}
                  className="group"
                >
                  Get Mitolyn Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Trusted by 2,847+ customers</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img 
                src={mitolynProduct} 
                alt="Mitolyn weight loss supplement bottles showing the advanced mitochondrial formula" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Mitolyn Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">What is Mitolyn?</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Mitolyn is not just another weight loss supplement—it's a scientifically formulated solution that works at the cellular level.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  The Mitolyn weight loss supplement works by targeting mitochondria, the cellular powerhouses responsible for energy production. As we age, mitochondrial function naturally declines, leading to a slower metabolism and reduced energy expenditure.
                </p>
                <p className="text-foreground leading-relaxed">
                  By supporting mitochondrial health through its proprietary blend of natural ingredients, Mitolyn helps restore your body's natural fat-burning capacity and combats the cellular stress and inflammation that contribute to weight gain.
                </p>
              </div>
              <div>
                <img 
                  src={mitolynBottle} 
                  alt="Single Mitolyn supplement bottle with colorful branding" 
                  className="w-full max-w-sm mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How Does Mitolyn Work?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Boosts Metabolism</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mitolyn enhances mitochondrial function, increasing your metabolic rate and helping your body burn calories more efficiently throughout the day.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Increases Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By optimizing cellular energy production, Mitolyn provides sustained vitality without the crashes associated with stimulants.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Reduces Inflammation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Natural antioxidants in the Mitolyn formula combat cellular stress and inflammation, supporting overall health and weight management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Key Benefits of Mitolyn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Supports natural fat burning at the cellular level",
                "Increases energy levels without jitters or crashes",
                "Enhances metabolic efficiency and thermogenesis",
                "Reduces cellular inflammation and oxidative stress",
                "Promotes healthy mitochondrial function",
                "100% natural, non-GMO formula with no harmful additives"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Premium Natural Ingredients</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every Mitolyn capsule contains a proprietary blend of scientifically-backed ingredients that work synergistically to support mitochondrial health.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">CoQ10</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Essential for mitochondrial energy production and powerful antioxidant protection.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">PQQ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Promotes the growth of new mitochondria and enhances cognitive function.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">L-Carnitine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transports fatty acids into mitochondria for efficient energy conversion.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Green Tea Extract</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rich in catechins that boost metabolism and support fat oxidation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Resveratrol</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Activates longevity genes and enhances mitochondrial biogenesis.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Alpha-Lipoic Acid</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Universal antioxidant that regenerates other antioxidants and supports glucose metabolism.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <img 
              src={mitolynSingle} 
              alt="Mitolyn supplement bottle - proprietary weight loss formula" 
              className="w-48 mx-auto"
            />
            <h2 className="text-4xl font-bold">Ready to Transform Your Body?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands who have discovered the power of mitochondrial optimization with Mitolyn weight loss supplement.
            </p>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleCTAClick}
              className="group"
            >
              Get Special Offer Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground">
              ✓ 60-Day Money-Back Guarantee &nbsp;&nbsp;|&nbsp;&nbsp; ✓ Free Shipping Available &nbsp;&nbsp;|&nbsp;&nbsp; ✓ Secure Checkout
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Is Mitolyn safe to use?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, Mitolyn is formulated with natural, non-GMO ingredients and is manufactured in FDA-registered facilities following GMP standards. However, consult your healthcare provider before starting any new supplement regimen.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How long does it take to see results?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  While individual results vary, many users report increased energy within the first week. Visible weight loss results typically appear within 4-8 weeks when combined with a healthy diet and regular exercise.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What makes Mitolyn different from other weight loss supplements?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlike traditional supplements that only suppress appetite or provide temporary energy boosts, Mitolyn targets the root cause of slowed metabolism—declining mitochondrial function. This cellular approach provides sustainable, long-term results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How should I take Mitolyn?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Take two capsules daily with water, preferably in the morning with breakfast. For best results, maintain consistency and combine with a balanced diet and regular physical activity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Does Mitolyn have any side effects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mitolyn is well-tolerated by most users. As with any supplement, some individuals may experience mild digestive adjustments during the first few days. If you have any concerns, consult your healthcare provider.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Summary */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Product Summary</h2>
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What is Mitolyn?</h3>
                    <p className="text-muted-foreground">
                      A cutting-edge Mitolyn weight loss supplement that targets mitochondrial function to naturally enhance metabolism, increase energy, and support sustainable fat loss.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">How Does It Work?</h3>
                    <p className="text-muted-foreground">
                      Works at the cellular level by optimizing mitochondrial health, boosting metabolic efficiency, and reducing inflammation—addressing the root causes of weight gain and low energy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Who Should Use Mitolyn?</h3>
                    <p className="text-muted-foreground">
                      Ideal for adults struggling with stubborn weight, sluggish metabolism, or low energy levels who want a natural, science-backed solution without harsh stimulants.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Why Choose Mitolyn?</h3>
                    <p className="text-muted-foreground">
                      Backed by scientific research on mitochondrial health, made with premium natural ingredients, manufactured in certified facilities, and supported by thousands of positive customer reviews.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recommended Sites */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Explore More Weight Loss Resources</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">You Become Thin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive weight loss guidance and tips
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open('https://you-become-thin.lovable.app/', '_blank')}
                  className="w-full"
                >
                  Visit Site
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">You Thin Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Expert advice for sustainable weight management
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open('https://you-become-thin.vercel.app/', '_blank')}
                  className="w-full"
                >
                  Visit Site
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">You Thin Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Additional resources for your weight loss journey
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open('https://you-thin.pages.dev/', '_blank')}
                  className="w-full"
                >
                  Visit Site
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            Disclaimer: This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary.
          </p>
          <p>
            Always consult with a healthcare professional before starting any new supplement regimen.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
