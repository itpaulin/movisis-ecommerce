const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

async function main() {
  try {
    const mouses = [
      {
        name: "Logitech MX Master 3s",
        price: 650,
        imageUrl:
          "https://raw.githubusercontent.com/itpaulin/ecommerce-images/main/01_mx-master-3s.png",
        inclusionDate: randomDate(new Date(2021, 0, 1), new Date()),
      },
      {
        name: "Logitech Pro X Superlight",
        price: 750,
        imageUrl:
          "https://raw.githubusercontent.com/itpaulin/ecommerce-images/main/01_logi-superlight.png",
        inclusionDate: randomDate(new Date(2021, 0, 1), new Date()),
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        price: 650,
        imageUrl:
          "https://raw.githubusercontent.com/itpaulin/ecommerce-images/main/01_logi-mx-keys-mini.png",
        inclusionDate: randomDate(new Date(2021, 0, 1), new Date()),
      },
      {
        name: "Logitech MX Keys S",
        price: 750,
        imageUrl:
          "https://raw.githubusercontent.com/itpaulin/ecommerce-images/main/01_logi-mx-keys-s.png",
        inclusionDate: randomDate(new Date(2021, 0, 1), new Date()),
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        price: 750,
        imageUrl:
          "https://raw.githubusercontent.com/itpaulin/ecommerce-images/main/01_logi-vibe.png",
        inclusionDate: randomDate(new Date(2021, 0, 1), new Date()),
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        price: 1200,
        imageUrl:
          "https://raw.githubusercontent.com/itpaulin/ecommerce-images/main/01_logi-lightspeed-phone.png",
        inclusionDate: randomDate(new Date(2021, 0, 1), new Date()),
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        price: 950,
        imageUrl:
          "https://raw.githubusercontent.com/itpaulin/ecommerce-images/main/01_logi-powerplay.png",
        inclusionDate: randomDate(new Date(2021, 0, 1), new Date()),
      },
      {
        name: "Logitech Desk Mat",
        price: 150,
        imageUrl:
          "https://raw.githubusercontent.com/itpaulin/ecommerce-images/main/01_logi-desk-mat.png",
        inclusionDate: randomDate(new Date(2021, 0, 1), new Date()),
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        price: 1500,
        imageUrl:
          "https://raw.githubusercontent.com/itpaulin/ecommerce-images/main/01_dell-S2421HN.png",
        inclusionDate: randomDate(new Date(2021, 0, 1), new Date()),
      },
      {
        name: "Dell P2422H",
        price: 2000,
        imageUrl:
          "https://raw.githubusercontent.com/itpaulin/ecommerce-images/main/01_dell-P2422H.png",
        inclusionDate: randomDate(new Date(2021, 0, 1), new Date()),
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        price: 1200,
        imageUrl:
          "https://raw.githubusercontent.com/itpaulin/ecommerce-images/main/01_logi-surround-z607.png",
        inclusionDate: randomDate(new Date(2021, 0, 1), new Date()),
      },
      {
        name: "Logitech Dock",
        price: 4500,
        imageUrl:
          "https://raw.githubusercontent.com/itpaulin/ecommerce-images/main/01_logi-dock.png",
        inclusionDate: randomDate(new Date(2021, 0, 1), new Date()),
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
