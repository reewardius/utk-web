import React from "react";

import fixture from "../fixtures/E7C52AMS.360.json";
import usage from "../fixtures/E7C52AMS.360.fmap_usage.json";
import { GUIDProvider } from "../context/GUIDContext";
import Volumes from "../components/Volumes";
import FlashUsage from "../components/FlashUsage";

const Page = () => {
  const volumes = fixture.Elements.filter(
    (e) => e.Type === "*uefi.FirmwareVolume"
  );

  return (
    <>
      <div className="layout">
        <div>
          <GUIDProvider>
            <Volumes volumes={volumes} />
          </GUIDProvider>
        </div>
        <aside>
          <h2>Flash Usage</h2>
          <FlashUsage usage={usage} />
        </aside>
      </div>
      <style jsx>{`
        .layout {
          display: flex;
        }
        aside {
          float: left;
        }
      `}</style>
    </>
  );
};

export default Page;