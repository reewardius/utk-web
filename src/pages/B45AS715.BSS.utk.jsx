import React from "react";

import fixture from "../fixtures/B45AS715.BSS.utk.json";
import usage from "../fixtures/B45AS715.BSS.fmap.json";
import { MarkedEntriesProvider } from "../context/MarkedEntriesContext";
import { GUIDProvider } from "../context/GUIDContext";
import Volumes from "../components/Volumes";
import FlashUsage from "../components/FlashUsage";
import Layout from "../components/Layout";
import { transform } from "../util/utk";

const volumes = transform(
  fixture.Elements.filter((e) => e.Type === "*uefi.FirmwareVolume")
);

const Page = () => {
  return (
    <MarkedEntriesProvider>
      <Layout sidepane={<FlashUsage usage={usage} />}>
        <GUIDProvider>
          <Volumes volumes={volumes} />
        </GUIDProvider>
      </Layout>
    </MarkedEntriesProvider>
  );
};

export default Page;