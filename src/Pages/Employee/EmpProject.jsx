import React from "react";
import UserHeader from "../../Components/UserComponents/UserHeader";
import UserNavbar from "../../Components/UserComponents/UserNavbar";
import { useTheme } from "@emotion/react";
import { Avatar, AvatarGroup, Box, Divider, Typography } from "@mui/material";
import HeaderImage from "../../Icons/HeaderImage.svg";
import DownloadIcon from "../../Icons/DownloadIcon.svg";
import ProjectProgress from "../../Components/Common/ProjectProgress";
import ProjectStatusBox from "../../Components/UserComponents/ProjectStatusBox";

const Empproject = () => {
  const theme = useTheme();
  const bgColor = theme?.palette?.background?.default;
  const paper = theme?.palette?.background?.paper;
  const Blue = theme?.palette?.primary?.main;

  return (
    <Box width="100%" bgcolor={bgColor} display="flex">
      <Box display="flex">
        <UserNavbar />
      </Box>
      <Box ml={36}>
        <UserHeader />
        <Box
          width="97%"
          mt={1}
          ml={1}
          height={800}
          bgcolor={paper}
          borderRadius="20px"
          overflow="hidden"
        >
          <Box
            sx={{
              backgroundImage: `url('${HeaderImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "left",
              width: "100%",
              height: "100px",
            }}
            borderRadius="20px"
            display="flex"
            alignItems="center"
            color="#fff"
            pl={6}
          >
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: "25px",
              }}
            >
              M-Bank
            </Typography>
          </Box>
          <Box
            width="100%"
            height={100}
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                Project Type
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                }}
              >
                Social Banking
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                Project Type
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                }}
              >
                Social Banking
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                Project Type
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                }}
              >
                Social Banking
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                Project Type
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                }}
              >
                Social Banking
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                Project Type
              </Typography>
              <AvatarGroup total={24}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
            </Box>
          </Box>
          <Divider />
          {/* project status */}

          <Box p={2}>
            <Typography fontWeight="bold" fontSize="large">Project Status</Typography>
            <Box width={800}>
              <ProjectStatusBox value="Ux Research" bgcolor="#FFDEDE" />
              <ProjectStatusBox value="Ui Designing" bgcolor="#A3D8FF" />
              <ProjectStatusBox value="Backend" bgcolor="#CABDFF" />
              <ProjectStatusBox value="Frontend" bgcolor="#C6FFBD" />
              <ProjectStatusBox value="Testing" bgcolor="#929DF8" />
              <ProjectStatusBox value="Bug Fixing" bgcolor="#FD957E" />
              <ProjectProgress value={50}>usduds</ProjectProgress>
            </Box>
          </Box>
          <Divider />
          {/* end project status */}

        {/* project documentation */}
        <Box p={3}>
            <Box display="flex" justifyContent="space-between">
                <Typography fontWeight="bold" fontSize="large">
                    Project Documentation
                </Typography>
                <Box component="button" bgcolor={Blue} sx={{
                    outline:'none',
                    border:'none',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-around',
                    p:1,
                    width:150,
                    borderRadius:'10px',
                    cursor:'pointer',
                }} >
                    <img src={DownloadIcon} alt="download"  />
                    <Typography color="white">
                        Download
                    </Typography>
                </Box>
            </Box>
            <Typography mt={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus totam ipsam vitae qui tenetur error reiciendis provident! Quia ratione, accusantium eum reprehenderit nostrum consequatur sint cum facilis quam illo magni.
                Animi ipsam accusamus similique sunt rem itaque, tempore dicta veniam aspernatur voluptate! Omnis, repudiandae sapiente nam incidunt placeat, voluptates magnam consectetur fuga explicabo soluta eligendi illo cum odio officia? Labore?
                Architecto similique voluptate deleniti ad laudantium minus hic eaque reprehenderit unde? Voluptatum vel doloremque voluptate dolores non, commodi aliquam eligendi, quia quaerat inventore fugiat repudiandae voluptas, sit autem provident veritatis.
                Saepe nulla, ipsam exercitationem dolorum eius quos tenetur aut perspiciatis. Officia rerum deserunt corporis illum facere praesentium quae, reprehenderit cupiditate corrupti fugiat! Autem excepturi debitis, eius commodi quisquam facilis natus?
                Modi delectus beatae earum, temporibus quos nostrum soluta ipsa error corporis cupiditate repudiandae suscipit esse rerum, hic sed sunt autem doloribus, inventore aperiam deleniti labore? Quae id assumenda molestias hic.
                Laborum rem quo neque eligendi eos. Perspiciatis sapiente, optio cumque dolor saepe iure labore. Omnis, nam delectus? Sapiente minima porro ullam mollitia, eaque quam vitae, aliquam illo, voluptatibus quos corrupti?
                Sit eius pariatur facere impedit a repudiandae unde atque fuga quibusdam consequuntur reiciendis velit saepe officia delectus, deserunt neque consequatur amet porro at nesciunt. Odio atque quia qui nostrum. Debitis!
                Dolores, nihil ullam delectus alias voluptatem consequuntur tempore, voluptatum neque nemo inventore veniam quam, consectetur deleniti. Sunt sit, voluptatum saepe excepturi qui amet obcaecati, ipsam totam iusto maxime incidunt quam.
                Voluptas molestias nisi enim debitis dolorum. Libero labore minima, perferendis accusamus aperiam, vitae ea voluptate facere commodi delectus possimus beatae cupiditate voluptatum! Adipisci, necessitatibus. In odio sequi magnam exercitationem maxime!
                Esse non iure provident ratione debitis reiciendis illo, enim corrupti animi perferendis at nam vero molestiae eius doloribus adipisci culpa voluptatum! Omnis exercitationem laboriosam ducimus nihil sunt voluptatum earum cupiditate?
                Esse veritatis, doloribus quaerat et tempora fugiat natus voluptates harum aperiam accusamus autem maiores laudantium repudiandae optio. Iure, nam obcaecati reprehenderit fugit, perferendis ut praesentium beatae quia quis molestias suscipit!
                Fuga corporis doloremque, doloribus eius, reiciendis totam harum aspernatur necessitatibus ab mollitia, repudiandae praesentium ullam repellendus. Delectus sint ipsa adipisci accusantium, enim molestias veritatis possimus aliquid, facilis provident totam tenetur!
                Rem quis ipsam enim sequi ducimus porro aperiam dolorem perspiciatis! Eius totam excepturi quae numquam beatae in, nihil voluptatibus asperiores, autem magnam aliquid pariatur nisi reiciendis sequi repudiandae. Itaque, quaerat.
                Non cumque iure maxime, quis, rem voluptate fugit maiores debitis est impedit odit alias esse, dicta totam vel expedita! Deleniti saepe quos magni sit? Dolor eos sit esse recusandae fugiat!
                Et quia voluptate, quasi fuga assumenda optio rerum delectus repellendus nemo voluptates impedit quos consequuntur blanditiis pariatur. Maxime, dolores quia, totam adipisci consequuntur odit ab fuga earum asperiores unde rerum.
                Quia eligendi, laboriosam quasi ea id quis. Odit, nobis hic officiis deserunt vel debitis rem officia aliquam ipsum voluptatum, quas, quod similique possimus aperiam laborum est aliquid nihil repellendus vitae.
                Dolorem, distinctio quasi consequuntur omnis dolores molestiae autem et voluptate. Optio, molestiae quia? Consequuntur tempore dolores optio esse facilis maiores vel velit. Quisquam, ducimus. Perferendis dolores ut fugit temporibus dicta.
                Rerum reprehenderit deserunt error necessitatibus aperiam optio voluptas, natus laborum nulla non nostrum adipisci nemo minima ipsam vel commodi quidem ratione nam numquam at excepturi. Assumenda perspiciatis qui pariatur tempora?
                Quasi, asperiores. Quaerat deleniti voluptatibus quasi ea eveniet laborum labore accusamus minima provident tempore velit ratione veritatis debitis id minus natus, dolores doloremque repellendus. Obcaecati accusamus autem veniam nihil nobis?
                Cupiditate at atque odio illum magnam impedit ex voluptatibus voluptates natus, amet error adipisci hic voluptatum explicabo voluptas commodi distinctio quasi? Voluptatem temporibus facilis laborum voluptate suscipit nobis nam quod!
                Reiciendis distinctio dolorum nobis consequatur, illum facere autem vitae quis dolorem corrupti nisi error id cum, ab, eos debitis omnis animi officia voluptatem nulla. Nam iste rem laborum adipisci voluptatem!
                Asperiores incidunt molestias in eligendi repellendus maiores adipisci culpa autem rerum nemo similique aspernatur totam minima, harum eum. Ducimus minima necessitatibus eos enim modi! Voluptatibus rerum omnis praesentium dolorum nisi.
                Natus alias repudiandae consequatur exercitationem nisi. Molestiae modi eligendi, illum odit architecto mollitia non ipsum commodi fugit in earum delectus! Et quidem ipsum excepturi nobis reiciendis eaque alias dolores explicabo.
                Molestiae accusamus illo, dolores modi corrupti laudantium, repellat ea officiis voluptate accusantium suscipit tenetur, debitis dolorum id pariatur necessitatibus sapiente quis ipsum! Minima quos dolor accusantium nesciunt reiciendis numquam dolores.
                Libero nam aperiam et quam sit sunt quos nobis! Quo, dolorum. Quaerat voluptatibus necessitatibus explicabo praesentium quod consectetur excepturi provident maxime deserunt voluptatem impedit laborum perferendis voluptatum ipsam, nostrum quia.
                Velit, nesciunt delectus libero mollitia dicta sapiente commodi repudiandae accusamus? Veniam cupiditate eligendi labore perspiciatis magni nam distinctio, odio tenetur. Ea distinctio obcaecati ipsum pariatur recusandae, ipsa necessitatibus omnis quisquam.
                Accusantium excepturi, pariatur deserunt minus dignissimos perspiciatis veniam praesentium molestias quasi adipisci rem itaque, voluptate explicabo repellendus nostrum ratione, atque obcaecati libero. Accusantium corrupti neque, eaque modi voluptatem quam veritatis?
                Delectus eum, impedit sequi harum quaerat officiis, consequatur inventore modi aperiam ex saepe animi optio rerum ipsa aut omnis rem placeat accusantium neque quisquam! Libero placeat optio officiis animi cum?
                Ipsam, soluta porro dolor blanditiis veniam reiciendis odit ipsa! Blanditiis id amet, reiciendis repellendus rerum consequuntur odio eum quisquam ipsam, culpa voluptatum iure aperiam numquam quaerat reprehenderit quam. Veritatis, reiciendis.
                Ut minus quae eligendi qui beatae quos quia dignissimos est, fuga ullam. Aliquam, consequuntur? Recusandae ea suscipit vitae, voluptates veritatis placeat itaque! Ullam dolorum quo quos quibusdam est, eaque delectus!
                Praesentium blanditiis vero ullam? Accusamus exercitationem eaque quo deleniti consequatur magnam earum dolore praesentium odio perspiciatis nobis aspernatur, aperiam quas. Molestiae praesentium, quos fugit consectetur id consequuntur explicabo dolorum sequi.
                Possimus, tempore! Quibusdam quis inventore odit quidem, odio laboriosam nemo, illum delectus unde libero voluptatibus fugit consequatur assumenda explicabo, iste laudantium! Dicta eius, quis fugit aut alias ipsum est ullam!
                Doloribus, qui ipsa repellendus architecto facere neque temporibus. Saepe reiciendis aperiam neque. Officiis saepe dolore, repellat dolorem, consequuntur minima numquam laboriosam mollitia vel aut rerum nisi blanditiis soluta eveniet repudiandae.
                Modi voluptas quam quae ipsam, possimus saepe dolore porro consequatur in magnam officiis quasi ratione qui vel. Eaque at laudantium quasi corporis autem eum, architecto dicta voluptas mollitia quo officiis.
                Architecto hic aperiam, necessitatibus assumenda consequatur aliquid iste reprehenderit non praesentium quibusdam nulla nesciunt in! Illo error quae eveniet eos asperiores, saepe voluptatem optio at deserunt totam laborum aperiam quos!
                Culpa omnis voluptatem porro modi, magni illum nostrum, mollitia sapiente hic ex vel quod excepturi itaque tempore odit veritatis dolor adipisci cum beatae molestiae in. Tempore perspiciatis quas suscipit dolorum.
                Eum nesciunt, nihil qui aperiam similique, possimus provident voluptates alias ipsum earum consequuntur dolorem eligendi minus velit nobis perferendis adipisci porro ipsa quam, atque laboriosam. Unde dicta id qui vitae!
                Repudiandae obcaecati odit ab repellendus optio eaque libero molestias quibusdam, rem, necessitatibus, quos dolorum nemo! Minima officiis sit, in, quisquam quae accusamus numquam aut, magni architecto cum amet deleniti a!
                Minus, magni id eius adipisci excepturi doloremque provident minima dolores ea sit ipsum a cumque officia iure illum porro et enim, nesciunt iusto beatae, temporibus labore sequi? Itaque, doloremque esse?
                Voluptatibus, iure voluptate! Et amet id doloremque quisquam. Soluta reprehenderit maiores eaque magnam excepturi laborum repellat aut assumenda ex tempora illo totam maxime architecto, consectetur necessitatibus fugit ab impedit ea.
                Voluptatum, perspiciatis quibusdam illo officiis aliquam rem. Neque numquam ducimus qui officia minima eligendi, eos temporibus repellat architecto nostrum ut deserunt, doloremque eius eveniet natus harum ullam blanditiis porro nemo.
                Incidunt quasi nemo odio quam ea. Accusamus beatae mollitia tempora commodi veritatis, facere similique non in optio explicabo officia ab blanditiis enim porro iure molestiae quia a, quos iste quisquam.
                Assumenda sint, illum aliquam sed laboriosam porro beatae aspernatur dolore fugit facere modi est enim fugiat totam, quibusdam similique vero ipsum consequatur deleniti ratione. Praesentium optio asperiores mollitia facilis repellat?
                Eaque, facere dignissimos. Asperiores dolor laboriosam, atque quo nostrum amet iste tempora distinctio blanditiis alias nulla officia quisquam dolores corporis aperiam animi. Dicta sapiente accusamus distinctio non maiores id ad.
                Eaque iure, voluptatibus perspiciatis a officiis repudiandae quod beatae vel, enim minima recusandae porro molestias similique ad quam soluta. Blanditiis quasi mollitia quibusdam amet dolores non molestiae numquam corporis culpa!
                Minima esse sunt magni corrupti illum iste nesciunt doloribus at velit reiciendis nulla maxime quas commodi eius ducimus aut deserunt voluptate, voluptatibus, vel earum unde cumque. Dicta architecto alias iure.
                Ipsa quaerat harum eum atque fugiat excepturi officia quibusdam aspernatur exercitationem doloremque consectetur suscipit provident in laborum esse repellendus molestias, porro ea minus iste. Esse aut nihil magnam nisi ipsa?
                Dolor deserunt accusantium nemo. Repellendus odio, eum ipsa eligendi nam provident fuga quisquam aut ab facere, sint quia perferendis minus. Quibusdam nisi asperiores nemo atque voluptate sed nulla minus quam.
                Dolorem accusantium esse pariatur deserunt id quod quia laboriosam itaque quaerat consectetur facilis, dolores voluptatum, distinctio error excepturi illo architecto dolore? Cum doloremque asperiores quam repellendus assumenda tempora praesentium reiciendis!
                Aut vel, voluptas molestias odio alias sapiente illo vero velit autem quae ullam obcaecati porro labore omnis accusamus architecto reiciendis enim? Atque magnam tempora ipsa numquam impedit sit, minima nostrum.
            </Typography>
        </Box>
        {/* end project documentation */}
        </Box>
      </Box>
    </Box>
  );
};
export default Empproject;
