import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import PlaceholderPage from "./pages/PlaceholderPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route
        path={"/archives"}
        component={() => (
          <PlaceholderPage
            title="Archives"
            titleZh="过刊"
            description="Browse all past issues of Digital Intelligence Frontiers."
            descriptionZh="浏览《数字智能前沿》的所有过刊。"
            currentPage="/archives"
          />
        )}
      />
      <Route
        path={"/editorial"}
        component={() => (
          <PlaceholderPage
            title="Editorial Team"
            titleZh="编辑团队"
            description="Meet the editorial team behind Digital Intelligence Frontiers."
            descriptionZh="认识《数字智能前沿》的编辑团队。"
            currentPage="/editorial"
          />
        )}
      />
      <Route
        path={"/instructions"}
        component={() => (
          <PlaceholderPage
            title="Instructions to Authors"
            titleZh="投稿指南"
            description="Guidelines for submitting manuscripts to Digital Intelligence Frontiers."
            descriptionZh="向《数字智能前沿》投稿的指南。"
            currentPage="/instructions"
          />
        )}
      />
      <Route
        path={"/contact"}
        component={() => (
          <PlaceholderPage
            title="Contact"
            titleZh="联系我们"
            description="Get in touch with the Digital Intelligence Frontiers team."
            descriptionZh="与《数字智能前沿》团队联系。"
            currentPage="/contact"
          />
        )}
      />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
