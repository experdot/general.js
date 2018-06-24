import {
    GameWorld
} from "../Engine/Core/GameWorld/GameWorld";
import {
    GameWorldView
} from "../Engine/Core/GameWorld/GameWorldView";
import {
    ParticlesWalker,
    ParticlesWalkerView
} from "../Engine/Visual/ParticleSystem/Walker/ParticlesWalker";
import {
    PointerInput
} from "../Engine/Core/Fundamental/Inputs";

class ParticlesWalkerWorld extends GameWorld {
    static Title() {
        return "Particels - Walker";
    }

    initialize() {
        this.view = new GameWorldView(this);
        this.inputs.addInput(new PointerInput());
    }

    createObjects() {
        let visual = new ParticlesWalker(new ParticlesWalkerView());
        this.addVisual(visual);
    }
}

export {
    ParticlesWalkerWorld
};